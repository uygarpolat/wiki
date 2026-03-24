#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

function parseArgs(argv) {
  const args = {
    input: 'data/manual-review/reviewed-articles.json',
    output: 'data/manual-review/reviewed-articles.sql',
    table: 'articles',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    const nextToken = argv[index + 1];

    if (token === '--input' && nextToken) {
      args.input = nextToken;
      index += 1;
      continue;
    }

    if (token === '--output' && nextToken) {
      args.output = nextToken;
      index += 1;
      continue;
    }

    if (token === '--table' && nextToken) {
      args.table = nextToken;
      index += 1;
    }
  }

  return args;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function escapeSql(value) {
  return String(value).replace(/'/g, "''");
}

function requiredString(record, fieldName) {
  const value = record[fieldName];

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing required string field "${fieldName}" on article "${record.title ?? 'unknown'}"`);
  }

  return value.trim();
}

function getSummaryText(record) {
  if (typeof record.summaryText === 'string' && record.summaryText.trim().length > 0) {
    return record.summaryText.trim();
  }

  if (
    Array.isArray(record.summaryParagraphs) &&
    record.summaryParagraphs.every((value) => typeof value === 'string' && value.trim().length > 0)
  ) {
    return record.summaryParagraphs.map((value) => value.trim()).join('\n\n');
  }

  throw new Error(`Article "${record.title ?? 'unknown'}" is missing summaryText or summaryParagraphs`);
}

function createInsertStatement(table, record) {
  const title = requiredString(record, 'title');
  const slug = record.slug ? String(record.slug) : slugify(title);
  const sourceUrl = requiredString(record, 'sourceUrl');
  const sourceHistoryUrl = requiredString(record, 'sourceHistoryUrl');
  const sourceExtract = requiredString(record, 'sourceExtract');
  const attribution = requiredString(record, 'attribution');
  const summaryText = getSummaryText(record);
  const category = typeof record.category === 'string' ? record.category.trim() : '';
  const readingMinutes =
    typeof record.readingMinutes === 'number' && Number.isFinite(record.readingMinutes)
      ? record.readingMinutes
      : 2;
  const language = typeof record.language === 'string' ? record.language : 'en';
  const revisionId =
    typeof record.wikipediaRevisionId === 'number' || typeof record.wikipediaRevisionId === 'string'
      ? `'${escapeSql(record.wikipediaRevisionId)}'`
      : 'NULL';

  return `insert into ${table} (
  slug,
  source_language,
  wikipedia_title,
  wikipedia_url,
  wikipedia_revision_id,
  source_extract,
  summary_text,
  article_history_url,
  attribution_text,
  category,
  reading_minutes,
  quality_status,
  published_at
) values (
  '${escapeSql(slug)}',
  '${escapeSql(language)}',
  '${escapeSql(title)}',
  '${escapeSql(sourceUrl)}',
  ${revisionId},
  '${escapeSql(sourceExtract)}',
  '${escapeSql(summaryText)}',
  '${escapeSql(sourceHistoryUrl)}',
  '${escapeSql(attribution)}',
  '${escapeSql(category)}',
  ${readingMinutes},
  'published',
  now()
)
on conflict (slug) do update set
  source_language = excluded.source_language,
  wikipedia_title = excluded.wikipedia_title,
  wikipedia_url = excluded.wikipedia_url,
  wikipedia_revision_id = excluded.wikipedia_revision_id,
  source_extract = excluded.source_extract,
  summary_text = excluded.summary_text,
  article_history_url = excluded.article_history_url,
  attribution_text = excluded.attribution_text,
  category = excluded.category,
  reading_minutes = excluded.reading_minutes,
  quality_status = excluded.quality_status,
  published_at = excluded.published_at;`;
}

async function main() {
  const { input, output, table } = parseArgs(process.argv.slice(2));
  const inputPath = resolve(input);
  const outputPath = resolve(output);

  const rawInput = await readFile(inputPath, 'utf8');
  const records = JSON.parse(rawInput);

  if (!Array.isArray(records)) {
    throw new Error('Input file must contain a JSON array');
  }

  const statements = records.map((record) => createInsertStatement(table, record));
  const sql = `${statements.join('\n\n')}\n`;

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, sql, 'utf8');

  console.log(`Wrote ${records.length} SQL statements to ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
