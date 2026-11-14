# Quote Generator AI Repair Instructions

This repository contains a static website deployed using GitHub Pages.

## Repository Structure

Application source is located under:

`app/`

GitHub Actions workflows are located under:

`.github/workflows/`

## AI Repair Process

When an application deployment fails:

1. Read `failure-context.txt`.
2. Inspect the failed validation information.
3. Inspect recent changes under `app/`.
4. Inspect relevant files under `app/`.
5. Determine the actual root cause.
6. Make the smallest safe repair.

## Allowed Changes

The AI may:

- modify application files under `app/`
- create application files under `app/` when necessary
- rename application files under `app/` when necessary
- remove application files under `app/` only when clearly required

## Repair Principles

- Preserve the application's intended behaviour.
- Preserve the application's intended appearance.
- Preserve valid application functionality.
- Make the smallest change required to resolve the failure.
- Prefer repairing the cause instead of bypassing the check.

## Restrictions

Never modify:

`.github/workflows/`

Never:

- weaken validation
- remove validation to make a pipeline pass
- expose credentials or secrets
- commit directly to the target branch
- delete unrelated functionality
- make speculative changes when the cause is unclear

If the root cause cannot be safely determined, leave the application unchanged.
