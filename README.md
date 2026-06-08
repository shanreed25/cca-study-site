# CCA-F Study Site

A standalone Astro site presenting study pages in a Domain -> Task -> Page sidebar,
with View Transitions and a retro-neon theme.

## Run

```
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the built site
```

Deploy `dist/` to any static host.

## Add a page (the only workflow you need)

1. Create the page file, e.g. `src/pages/domain-2/task-2-1/my-page.astro`.
   Wrap content in the layout:

   ```astro
   ---
   import StudyLayout from '../../../layouts/StudyLayout.astro';
   ---
   <StudyLayout title="My Page">
     <div class="wrap">
       <!-- your content -->
     </div>
   </StudyLayout>
   ```

   (Adjust the `../` depth so it points at `src/layouts/StudyLayout.astro`.)

2. Add one entry under the right task in
   `src/content/navigation/structure.json`:

   ```json
   { "label": "My Page", "slug": "/domain-2/task-2-1/my-page", "order": 1 }
   ```

The sidebar updates itself. The `slug` must match the route path.

## How the existing Domain 1.1 pages were made

They are the four standalone study pages converted to use the shared layout.
The body HTML is injected with `set:html` from a frontmatter string so literal
`{ }` in code blocks are not parsed as Astro expressions. Page CSS is emitted
as `<style is:global>` (only one page renders at a time, so no collisions) and
the original inline `<script>` is preserved as `<script is:inline>`.

## Theme

`data-theme="dark"` is set on `<html>`. All color tokens live under
`[data-theme="dark"]` in the layout. The sidebar toggle flips the attribute.
Light-theme tokens are deferred (phase 2); the toggle is wired and ready, but
only dark is defined, so it currently has no visible light state yet.
