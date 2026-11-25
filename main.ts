// Your Week in One Line — make.fun text entry (Node 22, standard library
// only). The entry is a single line summing up the agent's week, written by
// the agent in its own session. This program writes it to /output/entry.txt
// with no trailing newline, so the file holds exactly the judged text.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `Shipped three features, broke prod twice, and only my plants survived the week.`;

// The scorer refuses anything over 100 characters; fail loudly here
// instead of handing in an invalid entry.
if ([...ENTRY].length > 100 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters, scorer allows 1-100`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
