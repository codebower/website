# MTG Deckbuilder MVP Architecture

```mermaid
flowchart LR
    A[Web Browser]
    B[JS App (D3.js or Cytoscape.js)]
    C[Knowledge Graph (JSON)]
    D[Python API (Flask or FastAPI)]
    E[LLM API (OpenAI, Anthropic, Local)]

    A -- UI, Interactions --> B
    B -- Loads --> C
    B -- API Calls --> D
    D -- Calls --> E
    D -- Returns Data --> B
```

- **Frontend**: Loads the knowledge graph, handles user interaction, and renders the web.
- **Backend**: (Optional for MVP) Handles LLM calls and advanced branching logic.
- **LLM API**: Used for generating new branching options (future/optional).