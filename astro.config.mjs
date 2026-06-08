// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // View Transitions in Astro 6 are enabled per-page/layout via the
  // <ClientRouter /> component in the layout head. No global flag needed.
  site: 'https://example.com',
});
