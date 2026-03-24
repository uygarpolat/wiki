#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const DEFAULT_COUNT = 20;
const MAX_RANDOM_BATCH = 20;
const USER_AGENT = 'CalmWikiCurationScript/0.1 (manual review workflow)';
const FETCH_TIMEOUT_MS = 10000;

function parseArgs(argv) {
  const args = {
    count: DEFAULT_COUNT,
    language: 'en',
    output: 'data/manual-review/candidates.json',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    const nextToken = argv[index + 1];

    if (token === '--count' && nextToken) {
      args.count = Number(nextToken);
      index += 1;
      continue;
    }

    if (token === '--language' && nextToken) {
      args.language = nextToken;
      index += 1;
      continue;
    }

    if (token === '--output' && nextToken) {
      args.output = nextToken;
      index += 1;
    }
  }

  return args;
}

function buildActionApiUrl(language, limit) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    list: 'random',
    rnlimit: String(limit),
    rnnamespace: '0',
  });

  return `https://${language}.wikipedia.org/w/api.php?${params.toString()}`;
}

function buildSummaryUrl(language, title) {
  return `https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
}

function buildHistoryUrl(language, title) {
  return `https://${language}.wikipedia.org/wiki/${encodeURIComponent(title)}?action=history`;
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function looksLikeBadTitle(title) {
  return /^list of /i.test(title) || /\(disambiguation\)$/i.test(title) || /^\d{3,4}$/.test(title);
}

function scoreCandidate(summary) {
  const extractLength = summary.extract.length;
  const descriptionLength = summary.description?.length ?? 0;
  const titleLength = summary.title.length;

  let score = 0;
  score += Math.min(extractLength / 280, 1) * 0.45;
  score += Math.min(descriptionLength / 60, 1) * 0.2;
  score += titleLength > 6 && titleLength < 40 ? 0.2 : 0.08;
  score += summary.type === 'standard' ? 0.15 : 0;

  return Number(score.toFixed(3));
}

function toCandidate(summary, language) {
  return {
    categoryHint: summary.description ?? '',
    historyUrl: buildHistoryUrl(language, summary.title),
    language,
    reviewStatus: 'pending',
    sourceExtract: normalizeWhitespace(summary.extract),
    sourceUrl: summary.content_urls?.desktop?.page ?? '',
    suggestedInterestingness: scoreCandidate(summary),
    title: summary.title,
    wikipediaRevisionId: summary.revision ?? null,
  };
}

function isCandidateUsable(summary) {
  if (!summary || typeof summary.title !== 'string' || typeof summary.extract !== 'string') {
    return false;
  }

  if (looksLikeBadTitle(summary.title)) {
    return false;
  }

  if (summary.type && summary.type !== 'standard') {
    return false;
  }

  const extract = normalizeWhitespace(summary.extract);

  if (extract.length < 220) {
    return false;
  }

  if (/may refer to/i.test(extract)) {
    return false;
  }

  return true;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: {
      'Api-User-Agent': USER_AGENT,
      'User-Agent': USER_AGENT,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchRandomTitles(language, count) {
  const titles = [];

  while (titles.length < count) {
    const batchSize = Math.min(MAX_RANDOM_BATCH, count - titles.length);
    const payload = await fetchJson(buildActionApiUrl(language, batchSize));
    const randomItems = payload?.query?.random ?? [];

    for (const item of randomItems) {
      if (item?.title) {
        titles.push(item.title);
      }
    }
  }

  return [...new Set(titles)].slice(0, count);
}

async function main() {
  const { count, language, output } = parseArgs(process.argv.slice(2));

  if (!Number.isFinite(count) || count <= 0) {
    throw new Error('--count must be a positive number');
  }

  const titles = await fetchRandomTitles(language, count * 2);
  const summaries = [];

  for (const title of titles) {
    try {
      const summary = await fetchJson(buildSummaryUrl(language, title));

      if (isCandidateUsable(summary)) {
        summaries.push(toCandidate(summary, language));
      }

      if (summaries.length >= count) {
        break;
      }
    } catch (error) {
      console.warn(`Skipping "${title}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  const outputPath = resolve(output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(summaries, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${summaries.length} candidate articles to ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
