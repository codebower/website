# MTG Web-to-Decklist Builder (MVP)

## Overview

This project is an interactive web tool for exploring Magic: The Gathering (MTG) concepts via a branching web. Users select colors and archetypes to build a web of preferences. The MVP generates a prompt summarizing the user's web for use with an LLM (like ChatGPT), which can synthesize a decklist. No backend or dynamic deck generation is included in the MVP.

## Features

- Interactive branching web visualization of MTG concepts
- Highly dimensional static data (nodes, edges, metadata)
- User builds a web by selecting colors, archetypes, and mechanics
- Generates a natural language prompt for LLMs based on user selections
- All static/client-side (no backend required for MVP)

## Project Structure

```
mtg-deckbuilder/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── mtg_web_mvp.json
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

## Setup & Usage

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open in your browser:**  
   Navigate to `http://localhost:5173` (or as directed in your terminal).

## Development Philosophy

- All planning, decisions, and architectural notes are versioned in markdown files.
- MVP is static and client-side only; no backend or LLM API calls.
- Future versions may add backend integration for LLM-powered deck generation.

## References

- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) — Full architecture and planning notes.
- [src/data/mtg_web_mvp.json](./src/data/mtg_web_mvp.json) — Example data structure for the MTG web.

## License

MIT (or specify your preferred license).