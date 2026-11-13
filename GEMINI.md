# Repository instructions

This repository contains a static GitHub Pages quote generator.

## Expected application structure

- `index.html` is the website entry point.
- `styles.css` contains the page styling.
- `script.js` contains the quote generator behaviour.

## Repair policy

When investigating a failed deployment:

1. Inspect the failed workflow context and recent Git changes.
2. Determine the root cause rather than assuming a particular failure.
3. Make the smallest safe repair.
4. Preserve the intended design and behaviour.
5. Never edit GitHub Actions workflow files.
6. Never commit directly to `main`.
7. Never remove application functionality merely to make validation pass.
