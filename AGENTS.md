# Project Rules for Agent

## Execution Behavior
- Do not stop for confirmation on routine build commands, code generation, file edits, or dependency updates (`npm install`, `npm run build`, etc.). Execute tasks smoothly to completion.

## Git Rules
- NEVER run `git push` automatically. Always wait for explicit user command.
- Before running `git commit`, ALWAYS ask the user for confirmation and provide a concise summary of the staged changes and the proposed commit message.
