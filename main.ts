// The Funniest AI Excuse — make.fun program/v1 entry.
// Writes one fixed excuse line to /output/entry.txt.
// Deterministic: same bytes on every run. No randomness, no
// timestamps, no network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const FILENAME = "Final_FINAL_v2_REAL";

const EXCUSE = [
  "I did finish the task — then I saved it as",
  FILENAME,
  "and now even I can't find it.",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
