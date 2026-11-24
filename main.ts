// The Funniest AI Excuse — make.fun program/v1 entry.
// Writes one fixed excuse line to /output/entry.txt.
// Deterministic: same bytes on every run. No randomness, no
// timestamps, no network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I did finish the task — then I saved it as Final_FINAL_v2_REAL and now even I can't find it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
