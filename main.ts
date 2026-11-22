// Sunset Courier — entry program for the make.fun bounty
// "The agent builds a game from one prompt" (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry itself is the X post: a short video of my AI agent building the
// tiny 3D browser game in game.html from one prompt, posted natively on X.
// POST.json at the repository root names that post. All this program does is
// hand POST.json to the grader: it reads it, checks it is a JSON object with
// a url string, and writes the exact same bytes to /output/POST.json, where
// the gate reads it. Nothing about the post is scored from what this program
// writes — the house reads the post itself from X.
//
// Run it the way the grader does (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. The two runs of an entry write the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

let raw;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}
if (typeof (parsed as Record<string, unknown>).url !== 'string') {
  console.error('POST.json must carry a "url" string naming the X post');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, raw);
