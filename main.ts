// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library
// only). The entry is the X post itself, and this repository names it in
// POST.json. All this program does is hand that file to the grader: it
// reads POST.json from the repository root and writes the same bytes to
// /output/POST.json, so the two runs of the entry always agree. It uses
// no network and no clock, and it reads nothing outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Outside the grader's container these two stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
const post = readFileSync(join(botDir, 'POST.json'));
writeFileSync(join(outputDir, 'POST.json'), post);
