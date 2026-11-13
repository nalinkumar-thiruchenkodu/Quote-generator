# Quote Generator AI Repair Instructions

This repository contains a static motivational quote website deployed to
GitHub Pages.

## Application Files

- `index.html` is the website entry point.
- `styles.css` contains the website styling.
- `script.js` contains the quote list and application behaviour.

## AI Repair Instructions

When a deployment fails:

1. Read `failure-context.txt`.
2. Inspect the failed workflow logs.
3. Inspect the latest Git changes.
4. Inspect the complete application.
5. Determine the actual root cause.
6. Make the smallest safe repair.

## Repair Rules

- Preserve the application's intended design.
- Preserve existing functionality.
- Preserve valid quotes.
- Quotes should be meaningful and classroom-appropriate.
- Fix syntax errors when they are responsible for the failure.
- Fix broken or missing file references.
- Restore accidentally renamed or deleted required files when appropriate.
- Fix formatting problems when validation requires it.

## Safety Rules

Never modify:

`.github/workflows/`

Never:

- weaken validation
- remove validation to make the pipeline pass
- expose credentials
- commit directly to `main`
- delete unrelated functionality

If the root cause cannot be determined safely, do not make speculative changes.
