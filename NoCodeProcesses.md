# NoCode Processes

Out-of-code actions required for this project. Entries stay here forever once
written; mark complete with a `**Status:** Complete (YYYY-MM-DD)` line. Do not
collapse, summarize, or remove completed entries — this file is the auditable
record of every manual action taken across the life of the project.

---

## Deployment: Transfer repo from org to personal account, then make public

**Status:** Complete (2026-06-10)

**What:** Move the repo from the `Build-With-Shannon` GitHub organization to the personal account `shanreed25`, then flip its visibility from Private to Public.

**Why:** GitHub Pages on the Free organization plan does not support publishing from a private org repo. Transferring to a personal account and going public removes the plan-tier wall at zero cost. Verified against GitHub Docs ([Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)) on 2026-06-10.

**Where:** https://github.com/Build-With-Shannon/cca-study-site/settings

**Steps:**
1. Open the org repo Settings page (link above).
2. Scroll to the **Danger Zone** at the bottom.
3. Click **Transfer ownership**. In the dialog, enter `shanreed25` as the new owner and type the repo name to confirm.
4. After the transfer completes, navigate to the new URL: https://github.com/shanreed25/cca-study-site
5. Open Settings → scroll to **Danger Zone** → click **Change repository visibility** → select **Make public**, confirm.
6. (Local terminal) Update the git remote so it points at the new owner explicitly:
   ```bash
   git remote set-url origin git@github.shanreed25:shanreed25/cca-study-site.git
   git remote -v   # confirm both fetch and push lines now show shanreed25/cca-study-site
   ```

**Done when:** `https://github.com/shanreed25/cca-study-site` loads, the repo page shows a **Public** badge, and `git remote -v` shows the new URL.

---

## Deployment: Set GitHub Pages source to "GitHub Actions"

**Status:** Complete (2026-06-10)

**What:** Set the Pages deployment source to "GitHub Actions" on the transferred, public repo.

**Why:** Without this, the deploy workflow will run but Pages will reject the artifact because the repo defaults to "Deploy from a branch". Verified against [Astro docs](https://docs.astro.build/en/guides/deploy/github/) on 2026-06-10.

**Where:** https://github.com/shanreed25/cca-study-site/settings/pages

**Steps:**
1. Open the (now-transferred, now-public) repo on GitHub.
2. Click **Settings** in the top tabs.
3. Click **Pages** in the left sidebar.
4. Under **Build and deployment** → **Source**, select **GitHub Actions** from the dropdown.
5. No save button is needed; the change is applied immediately.

**Done when:** The Source dropdown shows "GitHub Actions". After the first successful workflow run, the same Pages settings page displays a green banner: "Your site is live at https://shanreed25.github.io/cca-study-site/".
