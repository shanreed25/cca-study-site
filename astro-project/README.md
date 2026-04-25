# Astro Starter Kit: Minimal

> This is a minimal scaffold Astro project with a clouflare adapter and a site url in the config file. This servers a starting point reference for an Astro project

### 1. Create Astro project

`npm create astro@latest . -- --template minimal --install --no-git --typescript strict --yes`


---


### 2. Install adapter

> The adapter tells Astro how to build output that runs on the host you are using

> This example uses CloudFlare

```
npx astro add cloudflare
```

This will:

- Install `@astrojs/cloudflare`
    - `npx astro add cloudflare`
- Modify `astro.config.mjs` to import and use the adapter
- Set `output: 'server'` or `'hybrid'` so dynamic routes can run on Cloudflare's edge

**Acceptance:** `astro.config.mjs` shows the cloudflare adapter imported. `npm run build` produces a `dist/` folder.

---

### 2. Set the site URL

> Site tells Astro the canonical, public URL where this site will live in production. Astro uses it any time it needs to construct an absolute URL during the build.

> Example In `astro.config.mjs`, add `site: 'https://rouseme.app'` to the config object. Required for absolute URLs in sitemaps and OG tags.

```js
export default defineConfig({
  site: 'https://rouseme.app',
});
```

**Acceptance:** `astro.config.mjs` includes the `site` field.


---


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


