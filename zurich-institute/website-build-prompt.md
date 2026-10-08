# Prompt: Build zurichinstitute.org

Paste everything below the line into a new Claude Code session opened on the website repository. Fill in or delete every `[[ ]]` placeholder first.

---

You are building the public website for the **Zurich Institute**, a small independent think tank founded by six people. The domain `zurichinstitute.org` is registered on Cloudflare. Build a complete, production-ready static site in this repository, commit it, and push it so Cloudflare can deploy it.

## 1. Who we are

The Zurich Institute studies how knowledge and technology can restore human agency at the community scale.

**Vision.** The Zurich Institute envisions a high-agency society with the knowledge and technology to pursue prosperity, meaning, and abundance.

**Mission.** [[Pick one, or write the final version:
 (a) The Zurich Institute researches and advocates for technologies and systems that restore agency and capability at the community scale.
 (b) The Zurich Institute researches, designs, and advocates for emerging technology frameworks and systems that activate agency and capability at the community scale.
 (c) To advance technologies and systems that enable localized agency and capability.]]

**How we work: Predict, Project, Provoke.**
- *Predict:* use scientific research to understand and evaluate trends.
- *Project:* build knowledge about the possible futures we want to shape.
- *Provoke:* publish contrarian thinking that promotes agency.

**Principles.** [[Keep the ones the group has voted in; delete the rest.]]
1. **Community-Scale Sovereignty.** We build for the level where trust forms: neighborhoods, towns, and cities. If a technology or policy weakens local ownership, accountability, and self-determination, it is moving in the wrong direction.
2. **Capability Over Centralization.** We favor tools, institutions, and markets that give small teams and local operators "Fortune 500 leverage" without requiring giant intermediaries. Decentralization is a design choice, and we design for it.
3. **Human Flourishing Is the Objective Function.** We optimize for prosperity, meaning, and abundance, material and cultural. Growth matters, but not at the expense of dignity, community cohesion, or the inheritance that makes life worth living.
4. **Proof, Not Posture.** We earn credibility through measurable work: rigorous research, real pilots, and policy proposals that can be implemented.
5. **Preserve to Progress.** Heritage, beauty, and continuity are strategic assets, not nostalgia. Strong institutions carry knowledge across generations, and progress depends on them.
6. **More Knowledge Is Better.** We should orient ourselves to generate, preserve, and make knowledge accessible, so anyone can find and use what is most useful.
7. **Agency Enables Humanity.** Agency comes from knowledge, liberty, and capability. Prosperity emerges when technology amplifies individual agency at group scale.
8. **Scalability.** Agency must scale across individuals, communities, regions, and beyond.

**Key terms** (use on the About page as a short glossary):
- *Agency:* the capacity to make your own decisions and cause change by your own effort.
- *Meaning:* the pursuit that nothing else supersedes.
- *Abundance:* the threshold at which a resource is no longer wanted for; the inverse of scarcity.

## 2. The six founders

For each person: name, one-line role or field, a 60 to 90 word bio, a portrait (square, at least 800 px), and one or two links.

| Name | Role / field | Bio | Photo file | Links |
|---|---|---|---|---|
| Brandon S. Byers | Postdoctoral researcher, ETH Zurich; circular construction, product passports, decentralized data | [[bio]] | [[file]] | ORCID 0000-0002-8622-8529, Medium @bsquared215 |
| Marc Apicella | [[role]] | [[bio]] | [[file]] | [[links]] |
| Jake Lesinski | [[role]] | [[bio]] | [[file]] | [[links]] |
| Matthias Brenner | [[role]] | [[bio]] | [[file]] | [[links]] |
| Luke Reeve | [[role]] | [[bio]] | [[file]] | [[links]] |
| [[sixth founder]] | [[role]] | [[bio]] | [[file]] | [[links]] |

If a photo or bio is missing, render a tasteful placeholder (initials on a neutral tile) and list it in the final report. Never invent biographical facts.

## 3. Launch content

- **First essay:** "When Scarcity Inverts: Property, Agency, and the Post-Scarcity Economy" by Brandon S. Byers. The full text with its 25 references is in `content/essays/when-scarcity-inverts.md` [[paste it in, or provide the file]]. Render references as a numbered list with in-text anchors.
- **Reading list:** *The Beginning of Infinity*, David Deutsch, with the four takeaways from our list. [[Add more.]]
- Leave room for more essays; adding one must mean dropping a Markdown file in a folder, nothing else.

## 4. Site map

1. **Home.** The vision sentence set large as the hero. Below: the mission, the three verbs (Predict, Project, Provoke), the latest two or three essays, and a one-line contact invitation. No carousel, no stock imagery.
2. **About.** Mission, principles, glossary of terms, and a short paragraph on why we exist (AI is changing how knowledge is produced and institutions have not kept up).
3. **Writing.** Index of essays, newest first: title, author, date, one-sentence dek, reading time. Each essay page has a comfortable reading measure (about 65 characters), footnoted references, author byline linking to People, and an RSS feed at `/rss.xml`.
4. **People.** The six founders in a grid.
5. **Reading.** The shared reading list.
6. **Contact.** `[[hello@zurichinstitute.org]]` as a mailto link. [[Newsletter signup: yes or no; if yes, which service.]]
7. A quiet 404 page.

## 5. Design direction: minimal and elegant

- Swiss International Typographic Style meets a classical book page: strict grid, generous whitespace, flush-left ragged-right text, hierarchy by size and weight rather than color or boxes.
- Type: a refined serif for headings and essay body (for example Newsreader, EB Garamond, or Source Serif 4) paired with a restrained grotesk for navigation and metadata (for example Inter or Söhne-like system sans). Self-host the fonts; no Google Fonts request at runtime.
- Color: near-white paper (#FAFAF7 range) and near-black ink, with one muted accent [[e.g. deep oxblood, alpine blue, or none]]. Full dark mode that respects `prefers-color-scheme`.
- A simple wordmark: "Zurich Institute" set in the heading serif, letterspaced small caps or similar. Also generate a favicon and an Open Graph image from it. [[Or supply a logo file.]]
- Motion: none beyond subtle hover states. Respect `prefers-reduced-motion`.
- Must look right from 360 px phones to wide desktops.

## 6. Copy rules

- No em-dashes anywhere in site copy. Use a comma, colon, semicolon, parentheses, or a new sentence.
- No hype adjectives (revolutionary, game-changing, cutting-edge, seamless, groundbreaking).
- No exclamation points, no emoji.
- Plain, confident sentences. Where you need copy I did not provide, write it short and mark it in the final report for review.

## 7. Technical requirements

- **Stack:** Astro (latest stable), static output, Markdown content collections for essays, people, and reading list. Zero client-side JavaScript unless a feature needs it.
- **Quality:** Lighthouse 95+ on performance, accessibility, best practices, and SEO. Semantic HTML, alt text, visible focus states, AA contrast in both themes.
- **SEO:** per-page titles and descriptions, canonical URLs on `https://zurichinstitute.org`, `sitemap.xml`, `robots.txt`, Open Graph and Twitter card tags, JSON-LD `Organization` on the home page and `Article` on essays.
- **No tracking** by default. [[Or: add Cloudflare Web Analytics, which is cookieless.]]
- **Hosting:** Cloudflare Pages (or Workers static assets) connected to this GitHub repo. Build command `npm run build`, output directory `dist`. Add a `README.md` covering local development, how to add an essay or a person, and the deploy steps.
- Include `_headers` with sensible security headers and long cache lifetimes for hashed assets.

## 8. Process

1. Scaffold the project and show me the site map and design tokens before writing all pages.
2. Build every page, then run the build and a local preview; check every route, both themes, and phone width.
3. Commit in logical steps and push to [[branch name, e.g. main]].
4. Finish with a short report: what was built, every placeholder or invented copy that needs a human, and the exact Cloudflare steps to go live.
