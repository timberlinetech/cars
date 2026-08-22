# Roadside Spottings

A car-spotting slideshow built from Andy's road trip photos. Pure HTML/CSS/JS, no build step, no dependencies — works straight off GitHub Pages.

## How to put this online (GitHub Pages)

1. Create a new repository on GitHub (e.g. `roadside-spottings`). It can be public or private — GitHub Pages needs a **public** repo unless you're on a paid plan.
2. Upload everything in this folder (`index.html`, `style.css`, `script.js`, `data.js`, and the `images/` folder) to the repo. Easiest way from a browser: on the repo page, click **Add file → Upload files**, drag in all the files and the `images` folder, and commit.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the `main` branch and `/ (root)` folder, then click **Save**.
5. GitHub will give you a link that looks like `https://<your-username>.github.io/roadside-spottings/` — it usually takes a minute or two to go live the first time.
6. Send that link to friends!

### If you'd rather use the command line

```bash
cd roadside-spottings   # this folder
git init
git add .
git commit -m "Roadside Spottings slideshow"
git branch -M main
git remote add origin https://github.com/<your-username>/roadside-spottings.git
git push -u origin main
```

Then turn on Pages the same way as step 3-4 above.

## Editing later

- **Car facts**: everything about each car (name, description, horsepower, rarity, etc.) lives in `data.js` — it's a plain list, one entry per photo, easy to hand-edit.
- **Look and feel**: colors, fonts, and layout are in `style.css`.
- **Photos**: swap files in `images/` and update the matching `file:` entry in `data.js`.

## A note on accuracy

Several of these cars were identified from a moving vehicle through a car window, so a handful are Claude's best guess rather than a certain ID — those slides are marked with a "Best Guess" badge in the corner. Production numbers, horsepower, and top speed figures are typical values for that model/year and may vary by trim or specific engine option.
