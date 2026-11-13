# AI Self-Healing GitHub Actions Workshop

This project demonstrates how a traditional GitHub Actions CI/CD pipeline can
be enhanced with an AI self-healing capability.

The application is intentionally simple so the workshop can focus on CI/CD,
GitHub Actions and AI-assisted recovery.

---

## Architecture

The normal pipeline follows:

Code
→ Validation
→ AI Content Check
→ Deployment
→ Health Check

If everything succeeds:

Deployment
→ GitHub Pages
→ Healthy

If something fails:

Deployment Failure
→ AI Self-Heal
→ Gemini Investigation
→ AI Fix Branch
→ Automated Validation
→ Pull Request
→ Human Review

---

## Project Structure

```text
quote-generator/
│
├── index.html
├── styles.css
├── script.js
├── GEMINI.md
├── .gitignore
├── README.md
│
└── .github/
    └── workflows/
        ├── deploy.yml
        └── self-heal.yml


GitHub Pages Setup
Open:
Repository → Settings → Pages
Under Build and deployment select:
Source: GitHub Actions

Gemini API Setup
The project uses Gemini for:
1.Quote-content validation
2.AI self-healing
Create a Gemini API key using Google AI Studio.
Then open:
Repository → Settings → Secrets and variables → Actions
Select:
New repository secret

secret Key Name:
LLM_API_KEY

value:
<YOUR GEMINI API KEY>

get api from gemini by signing in with your gmail
---------------------+++++----------------
GitHub Actions Permissions
The AI self-healing workflow needs permission to:
•create branches
•push commits
•create pull requests
Open:
Repository → Settings → Actions → General
Find:
Workflow permissions
select:
Read and write permissions
also enable,
Allow GitHub Actions to create and approve pull requests

---------

self heal flow:

Checkout failed commit
↓
Create ai-fix-* branch
↓
Collect failure logs
↓
Collect latest Git changes
↓
Gemini investigates repository
↓
Gemini modifies working files
↓
Automated validation
↓
Commit repair
↓
Push repair branch
↓
Create Pull Request

### Your repository should finally look like

```text
quote-generator/
├── index.html
├── styles.css
├── script.js
├── README.md
├── GEMINI.md
├── .gitignore
└── .github/
    └── workflows/
        ├── deploy.yml
        └── self-heal.yml


