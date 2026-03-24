#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';

const ENV_PATH = resolve('.env');
const SQL_PATH = resolve('data/manual-review/reviewed-articles.sql');
const SUPPORTED_KEYS = [
  'SUPABASE_SESSION_POOLER_CONNECTION_STRING',
  'DATABASE_URL',
];

function parseEnvFile(filePath) {
  const source = readFileSync(filePath, 'utf8');
  const lines = source.split(/\r?\n/);
  const entries = new Map();

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!key) {
      continue;
    }

    entries.set(key, value);
  }

  return entries;
}

function getConnectionString() {
  for (const key of SUPPORTED_KEYS) {
    if (process.env[key]) {
      return process.env[key];
    }
  }

  if (!existsSync(ENV_PATH)) {
    throw new Error('Missing .env file at the project root.');
  }

  const envEntries = parseEnvFile(ENV_PATH);

  for (const key of SUPPORTED_KEYS) {
    const value = envEntries.get(key);

    if (value) {
      return value;
    }
  }

  throw new Error(
    `Missing session pooler connection string. Add one of these keys to .env: ${SUPPORTED_KEYS.join(', ')}`
  );
}

async function main() {
  if (!existsSync(SQL_PATH)) {
    throw new Error(`Missing SQL import file at ${SQL_PATH}`);
  }

  const connectionString = getConnectionString();

  const child = spawn('psql', [connectionString, '-f', SQL_PATH], {
    stdio: 'inherit',
  });

  await new Promise((resolvePromise, rejectPromise) => {
    child.on('error', rejectPromise);
    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      rejectPromise(new Error(`psql exited with status ${code ?? 'unknown'}`));
    });
  });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
