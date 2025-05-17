# MTG Web-to-Decklist Builder: MVP Planning and Architecture

## Summary

This project is an interactive, web-based tool for exploring Magic: The Gathering (MTG) concepts via a branching web. The MVP (Minimum Viable Product) allows users to select colors, archetypes, and mechanics, building a personal web of preferences. The UX culminates in generating a high-quality prompt for an LLM (Large Language Model), which can then be used to synthesize a decklist. In the MVP, all processing is client-side and static—decklists are NOT generated dynamically.

---

## Decisions & Architecture

### 1. Data Architecture

- **Highly Dimensional JSON:** The web is represented as a graph (nodes/edges) with rich metadata (color, themes, archetype, mechanics, related concepts, etc.).
- **Nodes** represent colors, archetypes, tribes, mechanics, etc.
- **Edges** represent relationships (e.g. "guild", "archetype", "synergy").
- **Sample Data** is structured to support extensibility for future categories or relationships.
- **JSON is static** and shipped with the frontend.

### 2. UX Flow

- **Start with Color Selection:** User picks from MTG's five colors (White, Blue, Black, Red, Green).
- **Branching Exploration:** Users expand their web by selecting related archetypes, guilds, tribes, etc., using the static JSON data.
- **Prompt Generation:** When ready, the user clicks a button to generate a prompt (in natural language) summarizing their web for use with an LLM (e.g., ChatGPT).
- **No Backend or Live Deck Generation:** For MVP, the site does not make LLM or deck-generation API calls.

### 3. Technical Stack

#### **Frontend**
- **React** (with TypeScript) for component-based architecture.
- **D3.js** or **Cytoscape.js** for graph/web visualization.
- **Vite** as the build tool (fast, modern).
- **CSS Modules** or **Tailwind CSS** for styling.

#### **Static Data**
- All web structure and metadata is stored in local JSON files under `/src/data/`.

#### **No Backend**
- All code runs in the browser. No server-side processing.
- Future versions may add a minimal backend for LLM requests.

### 4. Code Organization

```
mtg-deckbuilder/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.ts
└── PROJECT_SUMMARY.md
```

### 5. Workflow & Version Control

- **All planning, architecture notes, and code drafts are stored in versioned markdown/text files.**
- **Git** is used for version control and backup.
- **Remote repository** (GitHub, etc.) is used for collaboration and transfer between development environments.

---

## Action Items

1. **Create the Git repository and project structure as outlined above.**
2. **Add this documentation file (`PROJECT_SUMMARY.md`) and all planning notes in markdown.**
3. **Add the sample highly-dimensional JSON data representing the MTG web.**
4. **Develop core React components** for rendering nodes, edges, and the interactive web.
5. **Implement prompt generation logic** that summarizes the user's web into a clear LLM prompt.
6. **Focus on UX for web exploration**—smooth branching, color-coded nodes, and dynamic expansion.
7. **Document project decisions, structure, and usage** in `README.md` for future contributors.
8. **Plan for future backend integration** (LLM API, deck generation, request quota), but keep MVP static and client-side.

---

## References & Inspirations

- [Mind Elixir](https://github.com/ssshooter/mind-elixir-core)
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js)
- [react-force-graph](https://github.com/vasturiano/react-force-graph)
- [Open-Mindmap-GPT](https://github.com/di-sukharev/open-mindmap-gpt)
- [Archidekt](https://github.com/Archidekt/archidekt) (deckbuilder inspiration)
- [Scryfall](https://github.com/scryfall/)

---

## Next Steps

- [ ] Set up the repository and initial folder structure.
- [ ] Add and version this summary and planning documents.
- [ ] Create and add the initial `mtg_web_mvp.json` with the highly dimensional example.
- [ ] Begin frontend development with static data and prompt-generation UX.
- [ ] Keep all planning, architecture, and meeting notes versioned in the repo for easy transfer and future reference.
