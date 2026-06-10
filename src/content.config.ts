import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// The "navigation" collection holds the menu structure only (data, not page
// bodies). It is loaded from a single JSON file via the content layer file()
// loader. Each top-level entry is a domain; the array of domains lives in
// structure.json. We give each domain a stable `id` so the file() loader can
// key entries.
const navigation = defineCollection({
  loader: file('src/content/navigation/structure.json', {
    parser: (text) => JSON.parse(text),
  }),
  schema: z.object({
    id: z.string(),                 // domain id, e.g. "1"
    domainTitle: z.string(),
    weight: z.string(),             // e.g. "27%"
    order: z.number(),
    tasks: z.array(
      z.object({
        taskId: z.string(),         // e.g. "1.1"
        taskTitle: z.string(),
        pages: z.array(
          z.object({
            label: z.string(),
            slug: z.string(),       // route path, e.g. "/domain-1/task-1-1/setup"
            order: z.number(),
          })
        ),
      })
    ),
  }),
});

// Loose top-level pages that don't belong to any Domain/Task bucket
// (e.g. "About the Exam", "Study Tips"). Rendered at the top of the
// sidebar above the domain list. Each entry maps 1:1 to a flat route
// under src/pages/ matching its `slug`.
const metaPages = defineCollection({
  loader: file('src/content/navigation/meta-pages.json', {
    parser: (text) => JSON.parse(text),
  }),
  schema: z.object({
    label: z.string(),
    slug: z.string(),               // route path, e.g. "/about-exam"
    order: z.number(),
  }),
});

export const collections = { navigation, metaPages };
