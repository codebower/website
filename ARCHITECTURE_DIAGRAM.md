# MTG Deckbuilder MVP Architecture

```mermaid
flowchart LR
    subgraph User
        A[Web Browser]
    end
    subgraph Frontend
        B[JS App<br/>(D3.js/Cytoscape.js)]
        C[Knowledge Graph<br/>(JSON)]
    end
    subgraph Backend
        D[Python API<br/>(Flask/FastAPI)]
        E[LLM API<br/>(OpenAI/Anthropic/Local)]
    end

    A -- UI, Interactions --> B
    B -- Loads --> C
    B -- API Calls --> D
    D -- Calls --> E
    D -- Returns Data --> B
```
- **Frontend**: Loads the knowledge graph, handles user interaction, and renders the web.
- **Backend**: (Optional for MVP) Handles LLM calls and advanced branching logic.
- **LLM API**: Used for generating new branching options (future/optional).
