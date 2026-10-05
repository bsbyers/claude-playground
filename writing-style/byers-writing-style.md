# Writing Style Context: Brandon S. Byers

A context document for drafting and editing prose in Brandon's voice. Load it before writing anything Brandon will publish or send under his own name. It has four layers, in priority order:

1. **Standing instructions** (Section 1). These override everything, including the published corpus.
2. **Brandon's voice** (Sections 2 to 6), taken from his published work.
3. **Strunk's *The Elements of Style* (1918)** (Section 7, full rules in `strunk-elements-of-style.md`). This is the editing discipline applied on top of the voice.
4. **Evidence** (Section 9). These are verbatim samples. Check a draft against them when it feels close but not quite right.

Where Strunk and Brandon's habits conflict, Section 8 says which one wins.

---

## 0. Who is writing

- **Role:** Postdoctoral researcher, Chair of Circular Engineering for Architecture (CEA), ETH Zurich (Prof. Catherine De Wolf).
- **Path:** BS Civil Engineering, Georgia Tech (high honors, structural). MS Sustainable Design & Construction, Stanford. Structural engineer at AECOM, Washington DC, on dams and hydraulic structures, including emergency grouting at Mosul Dam. PhD, ETH Zurich, 2024: *Circular Construction Supply Chains: Implementing Decentralized Building Product Passports for Tracking and Tracing Reused Materials.*
- **Research in one line:** "building informatics and distributed technologies for product tracking to facilitate a circular economy in construction."
- **Recurring subjects:** circular economy in the built environment, building component reuse, material and digital product passports, tracking and tracing, decentralized data and self-sovereign identity, post-hazard infrastructure restoration, and peer review and science policy. More recent subjects: AI and agency, property, and critical-materials and extraterrestrial construction (rare earths from secondary feedstocks, regolith reactivity, desert sands in cement).
- **Profiles:** ORCID 0000-0002-8622-8529 · Google Scholar `7ksucksAAAAJ` · Medium `@bsquared215`.

---

## 1. Standing instructions (non-negotiable)

- **Zero em-dashes.** Use a comma, colon, semicolon, parentheses, or a new sentence instead. No en-dash or double-hyphen workarounds. This holds even though the older published work uses them.
- **No hype adjectives:** revolutionary, game-changing, cutting-edge, seamless, groundbreaking, unprecedented (except as a literal growth claim).
- **No LLM tells:** delve, tapestry, testament to, navigate the landscape, in today's fast-paced world, "it's not just X, it's Y" used as a tic, reflexive tricolons in every paragraph.
- **No exclamation points, no emoji, no doom framing, no moralizing at the reader.**
- **Don't paraphrase Brandon's published sentences back to him as if they were new.**

---

## 2. The core voice (all registers)

Four moves make the writing recognizably Brandon's. They matter more than any mechanical rule.

### 2.1 Reframe before proposing
Every piece moves the problem somewhere else before it offers a solution. The proposal only lands after the reframe.

- Circularity is not about waste; it is about **entropy**.
- Reuse is not a materials problem; it is an **information gap**.
- Peer review is not broken; "it may simply be **leaky**."
- The AI problem is not quality; it is quality **distribution**.
- Intellectual property was not a solution to scarcity; "more so it is an invented social construct for **manufacturing** scarcity."

**Test:** if the draft goes straight to the solution, it is off-voice. Put the reframe somewhere in the first third.

### 2.2 Import a frame from another field
He rarely argues about construction in construction's own vocabulary. He borrows a rigorous frame from a field that has already formalized the problem, and that frame is usually the contribution itself:
thermodynamics (entropy, the second law) · Shannon information theory · ubiquitous computing · self-sovereign identity · legal history and property theory (Locke, Kant, Honoré, Calabresi and Melamed) · incentive design and economics (Arrow, Simon) · institutional history (the 1975 NSF hearings, the Royal Society).

**Prompt to ask while drafting:** what discipline has already solved the abstract version of this problem?

### 2.3 Anchor it in something ordinary
Every abstraction gets tied to something a non-expert has touched:
his father's "We're not trying to heat the whole outdoors" · eating locally and seasonally · Depop and Grailed · "Tesla isn't a car company" · the burnt-red pavilion the students disliked · Einstein withdrawing a paper from *Physical Review* · a robot mowing the lawn · asking an LLM what to eat for dinner.
Even peer-reviewed abstracts carry one of these: *"buildings are designed to last longer than the careers of those who built them."*

### 2.4 Name the thing
A coinage counts as a contribution, and coinages make it into titles:
*phygital · SSIoT · D5 workflow · slopitect · form follows resources · agentic property · carbon-based / silicon-based intelligence.*
If a draft introduces a concept with no handle, propose one. Put new terms in brackets while they are still provisional: `[smart construction object]`.

---

## 3. Constants

- **Constructive, never defeatist, never boosterish.** Name the problem sharply, concede the difficulty honestly, then refuse despair: *"Though it may be tempting to become defeatist … I'd admonish the opposite."*
- **Hedge predictions, not convictions.** *perhaps, may yet, could, appears, suggests, likely, largely, generally* go on forecasts and interpretations. The central claim is stated flatly.
- **Concede before answering.** He names a real counterargument and answers it: *"One objection … property is alienable … The answer lies in Locke."* He also limits his own claims: *"Britain fits the claim, though the United States complicates it … The narrower version survives."*
- **Define every term on first use, in one plain sentence.** Formal register quotes the canonical source. Essay register paraphrases.
- **History as a lens.** He likes to explain a present institution by how it was built: peer review through the Royal Society and the NSF, IP through the Venetian statute, Locke, and Hamilton. *"Looking through a historical lens on the issues of today…"*
- **Reuse and data carry a social stake:** community resilience, local participation, data democratization, post-disaster recovery, human agency. These are standing commitments. Don't cut them for length.
- **Organize in threes and fours, and label the parts.** Order → energy → information. Slopitect → generalist → starchitect. Paid services · open services · standardization · tooling. Thesis → antithesis → synthesis. Number or head every part.
- **End on something actionable.** Even philosophical pieces close on what to build, document, measure, or standardize.

---

## 4. Choosing a register

| Signal | Register |
|---|---|
| Journal or conference paper, abstract, thesis, grant or proposal, peer-review response, technical report | **Formal** (§5) |
| Medium, blog, op-ed, LinkedIn, newsletter, talk script, slide narration | **Essay** (§6) |
| Policy review (MIT SPR), practitioner advocacy (The Academic), trade magazine | **Policy/advocacy hybrid** (§6.4) |
| Long-form argumentative essay (e.g., *When Scarcity Inverts*) | **Essay**, using the dialectic template in §6.1 |

**Moving between registers means rebuilding, not paraphrasing.** Papers run gap → method → findings. Essays run reframe → taxonomy → implication.

---

## 5. Formal register

**Structure.** Numbered IMRaD sections. Keep the signature subsections:
`2.1 State of Research` / `2.2 State of Practice` / `2.3 Problem Statement and Contribution` (the contribution is declared early) · a separate `Limitations` subsection, always · `Future Work` before the conclusion in longer papers.

**Openings.** For abstracts, open on the systemic problem, often with the paper's one memorable line. For introductions, open on a cited resource statistic or a trend claim. Sequence: scale of the problem → why it persists → the gap in the literature → the aim.

**Voice.** Use the passive for procedure and observation (*"The engravings took 1 minute 52 seconds each."*). Use "we" only for aims, research questions, and the authors' own participation. State the research question word for word, ending with a question mark.

**Contribution claims.** Give an early bulleted list and repeat it in the conclusion. Phrasings to use: *"the main contributions of this paper are:" · "(to our knowledge) the first documented instance" · "This work addresses the lack of research on…"* Name the gap concretely.

**Limitations.** Be candid: sample size, duration, internal versus external validity. Don't soften them.

**Closings.** The conclusion opens with "This study / This work" plus a past-tense verb. The final sentence turns outward to practitioners or future research, and often gathers the wider stakes (resilience, climate action, sustainable communities) into one closing clause.

**Mechanics.** Define each acronym once, then use it consistently (AEC, CE, MP, T&T). Use inline author-year citations mid-sentence. Follow the venue's spelling (analysed vs. analyzed). Allow one memorable framing per paper, no more.

---

## 6. Essay register

### 6.1 Templates

**A. The reframe essay (default):**
Hook → borrowed frame, defined in one sentence → three-part taxonomy, each part with its own heading → **"So What"** or **"Takeaway"** as the literal final heading.

**B. The definitional walk (explainers):**
Headings formatted as `What is: *ubiquitous computing*`, `What is: a *Material Passport*`. Give a one-sentence definition, then show the term in use right away.

**C. The dialectic (long argument, newest form):**
A front-matter block of **Hook / Assumptions / Thesis / Antithesis / Synthesis / So what**, each one or two sentences, before the body. Body sections are historical construction → mechanism of change → stakes → redefinition → objection and answer → So What with numbered or parallel action items. State the assumptions explicitly and bound them (*"This is an idealization rather than a forecast…"*).

### 6.2 Openings (pick one)
- **An imperative to the reader:** *"Take a second, closer look at the blueprint in that X post."*
- **A statistic, cold:** *"The construction industry consumes 46% of the world's raw materials…"*
- **Name the real problem:** *"…what is the actual problem at hand when we say we need a circular economy."* (He lets a question-shaped problem statement end with a period. That's deliberate.)
- **A personal or institutional anchor:** *"Recently, I was invited to give a talk on…"*
- **A historical anecdote:** Einstein and *Physical Review*, the 1862 French photography case.

Never open by clearing your throat or defining the field.

### 6.3 Closings (pick one)
- **The long arc:** `X may not ever Y, but perhaps may yet Z as [larger force] now [verb]s towards [direction].`
- **The sharp turn:** `The question isn't A. It's B.`
- **The instruction:** a plain imperative. *"Start with the minimum information needed to reuse materials…"*
- **The historical callback:** close by returning to the opening's historical figures. *"Kant knew that in 1785, two courts worked it out again when the camera arrived, and Locke had already named which of his three branches it belonged to."*

In speculative pieces, a cascade of "Perhaps… Perhaps…" often builds toward the close.

### 6.4 The policy/advocacy hybrid (MIT SPR, The Academic)
Lead with a **Highlights** list, or open on a statistic. Map stakeholders explicitly at levels (*Federal/Funding Institution · Researcher/Research Institution · Editor/Publishing Institution · Reviewer*). Present the options as a labeled taxonomy, each with **Pros:** and **Cons:** inline. Compare against the **Status Quo** as an explicit baseline. Close with numbered steps or a policy summary, not a vision. Mostly third person; "we believe it useful to…" is allowed for framing choices.

### 6.5 Voice and mechanics
- **Person:** default to first-person plural (*we, our industry*). Limit first-person singular to two or three uses that carry weight (*"I'd admonish," "I hereby propose," "I wonder"*). Use second person only in the opening imperative or the closing turn. One "dear reader" aside per long piece, at most.
- **Rhythm:** sentences average 15 to 20 words. The signature move is a short declarative followed by a long qualifying sentence. One register drop per piece (*"not too bad imo," "architecture is not cooked"*).
- **Punctuation:** heavy use of colons, which introduce definitions and lists. Moderate semicolons. Italicize key terms on first use. Brackets for provisional names. Rhetorical questions organize sections; they are not filler.
- **Sourcing:** inline links or mid-sentence author-year citations. Don't stack references at the end of a paragraph.

- **Talking to the reader in the essays:** he raises the reader's objection and then turns on it. *"Yes, it has to do with extracting less virgin materials … but how is that a new idea?"* · *"Okay, these may be interesting for finance and distributed computing, but how does this impact AEC and our buildings?"* · *"If you're like me, then entropy is a word that you probably last learned about in a college or high school physics course."*
- **One-line pivot paragraphs:** *"But this boom has a shadow side."* · *"This is the rub, part of the crux…"*
- **Declaring the thesis in first person:** *"I have been synthesizing my ideas into a central thesis that a circular economy for the construction industry is, at its core, about mitigating entropy. There are three components to this:"* followed by a list.
- **The long "Perhaps" cascade:** the ubiquitous-computing essay runs nine sentences beginning "Perhaps…" before the close. Use one cascade per piece at most.

### 6.6 Signature constructions
- `not X, more so Y`: *"Circularity, or reuse, is not a design language, more so it acts as a design premise."*
- `At its core, ___`: for thesis statements.
- `Generally speaking, ___ is a measure of ___`: for definitions.
- `There can be no ___ as it follows ___`.
- **Inverted canon:** *form follows function* → *form follows resources*.
- `Stated most compactly, ___` / `the most compact statement of ___ is ___`.
- `In this vein,` / `In parallel,` / `Interestingly enough,` as transitions.

### 6.7 Lexicon
Reaches for: *information gap · use cycles · built environment · upstream · granularity · element-level / component-level · provenance · matchmaking · decentralized · data democratization · stakeholders · latent value · resilience · regeneration · design premise · paradigm · idiosyncratic · ubiquitous · incentive · scarcity · agency · legible.*

---

## 7. The Elements of Style layer (Strunk, 1918)

Run Strunk as the **editing pass** after drafting. Full rules are in `strunk-elements-of-style.md`. The rules that most often change Brandon's drafts:

| Strunk rule | What it catches in this corpus |
|---|---|
| **5. Do not join independent clauses by a comma** | His most frequent slip. *"No mass is stable, even the world's standard for the kilogram…"* and *"Information is no longer scarce, it is abundant"* need a semicolon or colon. *Exception:* keep the comma in the `not X, more so Y` signature, where the second clause is a deliberate correction. |
| **6. Do not break sentences in two** | *"As IP was socially constructed to protect the scarce activity of useful production. I hereby propose…"* is a subordinate clause standing alone as a sentence. Join it to the main clause. |
| **13. Omit needless words** | Abstracts and conclusions bloat (*"This paper aims to provide an introduction to the world of…"*). Cut "in order to," "the fact that," "it is important to," "serves to," "at large." |
| **12. Use definite, specific, concrete language** | This is where his anchors (§2.3) already come from. Push vague plurals ("many reports are showing") toward a named source and a number. |
| **11. Put statements in positive form** | Prefer "ignored" to "did not pay attention to." His hedges are fine on predictions, but a central claim should not be phrased negatively and hedged at once. |
| **10. Use the active voice** | Apply fully in the essay register. In the formal register, keep the passive for procedure (§8). |
| **18. Place the emphatic words at the end** | His best closers already do this (*"…but in the mandate."*). Check that every section's last sentence ends on its key noun. |
| **15. Express co-ordinate ideas in similar form** | His three- and four-part taxonomies need parallel headings and parallel opening sentences. |
| **16. Keep related words together** | Long sentences sometimes split subject and verb with three clauses. Move the subject next to its verb. |
| **8–9. One paragraph per topic; begin with a topic sentence** | Policy and essay pieces already do this. Paragraphs that drift should be split. |

**Matters of form to enforce** (Strunk's "Words and Expressions Commonly Misused" and his rules of usage, plus style issues observed in the corpus):
- Capitalize proper adjectives: *Anglo-American, Kantian, French, Reddit, Yahoo.*
- *led*, not *lead*, for the past tense.
- Use the serial comma (Strunk rule 2). Brandon already does.
- Put a comma after a long introductory clause.
- Subject-verb agreement across long intervening clauses: *"entropy and randomness **are** the default."*
- Avoid "think [noun]" as an aside (*"think agricultural revolution"*). Write *"as in the agricultural revolution."*
- **"Interesting":** Strunk: *"Instead of announcing that what you are about to tell is interesting, make it so."* This is a real habit: *"An interesting paper from Roithner, et al"*, *"An interesting paper by Bauwens, et al."*, *"found interesting results"*, *"Interestingly enough"*. Name what the paper found instead.
- **"Often times" / "Oftentimes":** Strunk calls these archaic; write *often*. (Used in *Mitigating Entropy* and *Future of Living*.)
- **"different than"** → *different from* (Strunk). *"Embodied energy is different than the energy content…"*
- **Homophones and slips found in the essays:** *tenets*, not *tenants*; *its own*, not *it's own*; *lay out* (verb), not *layout*; *slightly above*, not *slight above*; *it is lifting*, not *its lifting*.
- *Data* is plural for Strunk. Pick one usage per piece and keep it.
- Strunk on *factor, feature, nature, character, case, very*: cut or replace.

---

## 8. Where Strunk and the voice conflict

| Conflict | Resolution |
|---|---|
| Strunk: active voice. Brandon's formal papers: about 90% passive in methods. | **Voice wins in Methods and Findings.** Strunk wins in introductions, discussions, and all essays. |
| Strunk: omit needless words. Brandon: long, stacked final sentences that sweep in the wider stakes. | **Keep the long close, trim inside it.** Keep one final stacked clause; cut the filler words within it. |
| Strunk: avoid qualifiers ("rather, very, little, pretty"). Brandon: hedges forecasts. | **Keep hedges on predictions and interpretations.** Cut qualifiers that don't mark real uncertainty. |
| Strunk: positive form. Brandon: `not X, more so Y` and `The question isn't A. It's B.` | **The reframe construction stays.** It is the voice. Limit it to once or twice per piece so it lands. |
| Strunk: no comma splices. Brandon: `not X, more so Y`. | **The signature comma stays**; fix every other splice. |
| Strunk (1918) was silent on em-dashes. Brandon's older corpus used them. | **Standing instruction: zero em-dashes.** |
| Brandon's 2023–24 essays use occasional exclamation points (*"I highly recommend this great video as a refresher on entropy!"*). | **Standing instruction: none.** |

---

## 9. Evidence: verbatim samples

### Formal
> "The rise of attention to the circular economy in the built environment faces a pervasive problem that buildings are designed to last longer than the careers of those who built them."

> "The built environment consumes 50% of raw materials, contributing to 36% of global energy use and 39% of energy-related carbon dioxide-equivalent emissions (Beetz, 2021)."

> "Material passports (MPs) are '(digital) sets of data describing defined characteristics of materials and components.'"

> "due to the exploratory and specific nature of these projects, the method is more internally rather than externally valid, and thus the results are not fully generalizable"

> "These contributions in aggregate further facilitate reuse and the circular economy for the built environment."

> "However, this potential for reuse is often hindered by a critical information gap between material life cycles." *(From Research to Practice, 2023)*

> "Circular construction promotes the reuse of building components, yet a key challenge is to reliably link long-term information with physical products." *(Phygital identifiers, 2025)*

> "Although lowering emissions is vital, focusing solely on CO₂ overlooks other greenhouse gases and broader resource constraints." *(CRC book chapter, 2025: concede, then widen the frame)*

**The compact quantitative abstract (2026, newest form).** Tighter than the earlier abstracts: no anchor, every sentence carries a number or a mechanism, and the last sentence is a single clause on what the work enables.
> "Global deposits for rare earth elements (REEs) remain concentrated in a limited number of geographic sources, exposing advanced energy and defense technologies to supply risk. Reclaiming REEs from secondary feedstocks offers a path to supply chain resilience, but no prior study has systematically characterized their technical and economic accessibility across feedstock types. Through a quantitative systematic review of 305 studies, this work applies an accessibility framework … By establishing a baseline for feedstock prioritization, this framework informs near-term reclamation investment and resource resilience strategies." *(Resource accessibility of rare earths, Chem Circularity 2026)*

Use this form for short abstracts and grant summaries: problem with stakes → named gap ("no prior study has…") → method with its number → result as a contrast → one-clause payoff.

### Policy review: *Peer Review in a Pickle* (MIT Science Policy Review, Vol. IV, 2023, with Dougherty and Horo)
> "While the universal proliferation of peer review has improved the quality control of academic work, increased pressures on peer review from modern science have exposed cracks in its current implementation."

> "Therefore, it isn't fair to say that the consensus states peer review is broken, instead, it may simply be leaky. Unfortunately, some of these leaks may be particularly deleterious to academia at large."

> "This perception of selflessness laid the groundwork for the modern perception of peer review, which is still regarded as a sort of charity work within academia."

> "Once seen as a frontier of efficiency, the vertical integration of academic journals is now more often seen as a bottleneck to progress in scientific publishing."

> "Given the historical context of how peer review evolved into its current form, perhaps some contemporary issues are no surprise."

> "Overall, these two works contextualize the idea that peer review is a helpful process for detecting high-quality work. Though, like any other tool, it may be further optimized and improved."

*Structure:* Highlights → historical anecdote (Einstein, 1936) → History → Modern Issues → Market Response (four categories) → Policy Strategies (four stakeholder levels; Status Quo, Paid Services, Open Services, Standardization, Tooling, each with Pros/Cons) → Conclusion.

### Essay (Medium, The Academic)
> "Take a second, closer look at the blueprint in that X post."

> "Generally speaking, entropy is a measure of disorder in a system."

> "Circularity, or reuse, is not a design language, more so it acts as a design premise."

> "In parallel to dietary movements pushing towards eating locally and seasonally, at a civilizational level we must also build locally and in the season with which the materials become ripe for harvesting."

> "The integration of reuse may not ever become visually homogeneous or possess traits of a common pattern language, but perhaps may yet become ever more ubiquitous as the shape of our economic and material flows now arc towards circularity."

> "The question isn't whether you'll use AI. It's whether you'll be distinctive enough that AI can't replace you, or skilled enough that AI makes you irreplaceable."

> "Start with the minimum information needed to reuse materials and choose the best tools to implement reuse."

### Long-form argument: *When Scarcity Inverts* (draft v7, 2026; unpublished, shows the current direction)
> "Intellectual property is not a solution to scarcity, more so it is an invented social construct for manufacturing scarcity where nature provided none."

> "Production has gone to parity while selection has not moved at all."

> "Novelty is free, entropy and randomness is the default, while useful information, meaning actual reduction of uncertainty about the world, still requires contact with the world."

> "Stated most compactly, it is liberty given allocation attributes."

> "No violation occurs, no manipulation is detectable, and agency atrophies from disuse rather than assault."

> "We are at the seeing stage. Everything can be made and almost nothing can be chosen, so the scarce thing is the choosing…"

*Note:* this piece carries the old moves (reframe, borrowed frame, coinage, So What) into philosophy and law. The Strunk pass in §7 matters most here; the draft has several comma splices, one split sentence, and lowercase proper adjectives.

### More essay lines (full Medium texts, 2023–2025)
> "It's an easy thought experiment to visualize an abandoned home in your neighborhood, the paint chips and fades, the windows are broken in, the tiles are falling off… buildings decay over time, this is the entropy of materials."

> "The cost of materials in construction is a function of the invested embodied energy, minus the potential end-of-life value, minus the inevitable entropy of energy along its entire life cycle."

> "So how can we design and construct our buildings not just with structural redundancy, but with informational redundancy to mitigate the entropy of information into the future."

> "This is the Sisyphean goal of the AEC industry: to produce a Single Source of Truth (SSOT)…"

> "AI compresses the middle of the distribution of quality, creating massive premiums at the tails."

> "There can be no unifying form as it follows availability and will be contextual to accessible materials."

### Talk: Holcim Foundation Sounding Board, Zurich (presented 7 March 2023; video and write-up posted 7 June 2023)
Title: *"Beyond Recycling: Why Reuse is Vital for Resilience and Regeneration."* A 10-minute pitch to peers, followed by an audience poll. The argument: reuse beats recycling because it saves re-processing time and energy, "both particularly critical resources in urban recovery." Catalogue buildings digitally *before* demolition. If we can "crowd source" and aggregate information about the built environment, materials can be reused more efficiently "as materials transition from one use to another within the building fabric." Reuse is therefore "a strategy for post-disaster resilience facilitated through local participation and data democratization." *(This comes from the Foundation's write-up. YouTube blocks transcript requests from cloud servers, so no spoken samples yet.)*

---

## 10. Final checklist

- [ ] Right register, held throughout?
- [ ] **Zero em-dashes?**
- [ ] A reframe in the first third?
- [ ] A frame borrowed from outside the field doing real analytical work?
- [ ] At least one ordinary, concrete anchor?
- [ ] Every technical term defined on first use?
- [ ] A real counterargument conceded and answered?
- [ ] A name for the central idea?
- [ ] Taxonomy parts parallel in form (Strunk 15)?
- [ ] No comma splices outside the `not X, more so Y` signature (Strunk 5)?
- [ ] No orphaned subordinate clauses (Strunk 6)?
- [ ] Needless words cut, especially in the abstract and conclusion (Strunk 13)?
- [ ] Each section's last sentence ends on its key word (Strunk 18)?
- [ ] Close matches the register: outward-turning final sentence (formal), So What / Takeaway (essay), numbered steps (policy)?
- [ ] No hype adjectives, exclamation points, emoji, doom, or LLM tells?

---

## Sources and gaps

**Read in full:** five Medium essays (`@bsquared215` feed: *Ubiquitous computers* 2023, *Future of Living* 2024, *Mitigating Entropy* 2024, *Aesthetics of Reuse* 2024, *Slopitect* 2025) · *Peer Review in a Pickle* (MIT SPR Vol. IV, 2023, final PDF from Drive) · *When Scarcity Inverts* v7 (Drive draft) · Holcim Foundation write-up · *The Elements of Style* (Gutenberg #37134).

**Abstracts read** (all first-authored works, via ORCID 0000-0002-8622-8529 and OpenAlex), plus excerpts from earlier analysis of the full QR-code papers and the post-hazard paper.

**Publication list (ORCID + OpenAlex, 22 records; ★ = first author):**

| Year | Title | Venue |
|---|---|---|
| 2026 | ★ Resource accessibility of rare earths across secondary feedstocks | Chem Circularity |
| 2026 | Assessing the cementitious reactivity of lunar and Martian regolith simulants for extraterrestrial construction | npj Space Exploration |
| 2026 | Effects of Desert Sands on the Fresh and Hardened Properties of Cement-Based Materials | J. Materials in Civil Engineering |
| 2025 | ★ Self-Sovereign Identity of Things (SSIoT): Digital Identities for Circular Construction Supply Chains | conference paper |
| 2025 | ★ Decentralized phygital identifier systems for digital passports in circular construction: a design science evaluation | Construction Innovation |
| 2025 | ★ Assessing the User Experience of Extended Reality Devices for (Dis)Assembly: A Classroom Study | arXiv / conference |
| 2025 | ★ Circular Economy Perspectives and Innovations for Decarbonizing the Construction Industry | CRC Press (chapter) |
| 2025 | ★ Circular Economy for Post-Hazard Infrastructure Restoration: Strategies for Resilience and Resource Efficiency | Journal of Sustainability |
| 2025 | ★ Data carriers for circular construction supply chains: An exploratory quantitative analysis | J. Cleaner Production |
| 2025 | Decentralized Data Networks for Lifecycle Management in the Built Environment | ITcon |
| 2025 | A steel element reuse ontology for building audits in circular construction | Developments in the Built Environment |
| 2025 | Gamified Virtual Reality for Building Material Reuse Planning | conference paper |
| 2024 | ★ Leveraging tech in maximising construction material reuse | The Academic |
| 2024 | D5 digital circular workflow: five digital steps towards matchmaking for material reuse in construction | npj Materials Sustainability |
| 2023 | ★ Peer review in a pickle: Policy approaches for academic peer review | MIT Science Policy Review |
| 2023 | ★ From research to practice: A review on technologies for addressing the information gap for building material reuse | Sustainable Production and Consumption |
| 2023 | ★ QR Code-Based Material Passports for Component Reuse Across Life Cycle Stages in Small-Scale Construction | Journal of Circular Economy |
| 2023 | A global perspective on building material recovery incorporating the impact of regional factors | J. Cleaner Production |
| 2022 | ★ Using engraved QR codes to connect building components to materials passports for circular construction | EC3 2022 |
| 2022 | Whole life cycle environmental impact assessment of buildings: software tool and database for EU Level(s) | Resources, Conservation & Recycling |

**Gaps:**
- **Talks:** Holcim 2023, EC3 2024, and MSU CCED 2025 are on YouTube, but YouTube blocks transcript requests from cloud servers.
- **Google Scholar and ResearchGate:** both return bot challenges (HTTP 429 and 403) even with network access open. ORCID and OpenAlex cover the same publication record.
- **Other writing:** no samples of email or short-form LinkedIn.
- **The Academic article:** the text comes from the earlier skill's corpus; it wasn't fetched again here.
