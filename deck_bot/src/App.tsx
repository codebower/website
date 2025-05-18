import React, { useState } from "react";
import ColorSelector from "./components/ColorSelector";

const App: React.FC = () => {
  const [selectedCombo, setSelectedCombo] = useState<null | {
    id: string;
    label: string;
    colors: string[];
  }>(null);

  return (
    <div>
      {!selectedCombo ? (
        <ColorSelector onSelect={setSelectedCombo} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>
            Selected: {selectedCombo.label}
          </h2>
          {/* Render next step here */}
        </div>
      )}
    </div>
  );
};

export default App;