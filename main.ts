import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He moved me to the bathroom for the humidity, forgot me for a month, then acted surprised when I dropped a leaf like a mic. I have been photosynthesizing out of pure spite ever since.";

// The gate accepts 1–279 characters; refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 279) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–279 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
