# MTG Deckbuilder MVP Architecture

```mermaid
flowchart LR
    A[Web Browser]
    B[JS App]
    C[Knowledge Graph JSON]
    D[Python API]
    E[LLM API]

    A -- UI and Interactions --> B
    B -- Loads Data --> C
    B -- API Calls --> D
    D -- Calls --> E
    D -- Returns Data --> B
```

- **JS App**: D3.js or Cytoscape.js for rendering and logic.
- **Python API**: Flask or FastAPI for backend logic (optional for MVP).
- **LLM API**: OpenAI, Anthropic, or local model (future/optional).