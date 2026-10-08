# zurichinstitute.org

The Zurich Institute website: a static [Astro](https://astro.build) site with no client-side JavaScript, no tracking, and self-hosted fonts (Newsreader and Inter).

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves dist/
```

Requires Node 22 or newer.

## Where the content lives

| What | File |
|---|---|
| Vision, mission, principles, method, glossary, open questions | `src/data/institute.ts` |
| Founders (bios, roles, links, photos) | `src/content/people.json` |
| Reading list | `src/content/reading.json` |
| Essays | `src/content/essays/<essay-slug>/v<n>.md` |

### Publishing a new version of an essay

Essays are versioned. Never edit a published version in place; add a new file.

1. Copy the latest file, e.g. `src/content/essays/when-scarcity-inverts/v4.md` to `v5.md`.
2. In the new file's frontmatter, set `version: 5`, update `date`, and write a one-line `changes` note saying what changed.
3. When the essay is final, set `status: published`.

The essay's main address (`/writing/when-scarcity-inverts/`) always shows the highest version. Every version keeps a permanent address (`/writing/when-scarcity-inverts/v4/`), lists the full version history, and shows a ready-made citation for that exact version. Older versions carry a notice linking to the latest.

### Adding a new essay

Create `src/content/essays/<new-slug>/v1.md` with the same frontmatter fields as the existing essay. Citations written as `[3]` or `[16, 17]` in the text are linked automatically to the numbered `references` list in the frontmatter.

### Adding a portrait

Put a square image (at least 800 px) in `public/people/`, then set `"photo": "/people/<name>.jpg"` on that person in `people.json`. Without a photo, the page shows an initials tile.

## Deploying on Cloudflare Pages

The domain is registered on Cloudflare, so Pages is the simplest host.

1. Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, then select the GitHub repository.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: the folder containing this README (`zurich-institute/site` while the site lives in `claude-playground`; leave blank once it has its own repository)
   - Environment variable: `NODE_VERSION` = `22`
3. **Custom domains → Set up a domain**: add `zurichinstitute.org`, then `www.zurichinstitute.org`. Cloudflare creates the DNS records automatically because it already manages the zone.
4. Set the production branch to the branch you want live (usually `main`). Every other branch gets its own preview URL.

`public/_headers` sets security headers and long cache lifetimes for hashed assets; Cloudflare Pages applies it automatically.
