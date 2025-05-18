import React, { useState } from "react";
import colorCombinations from "./data/color_combinations.json";

type Color = "white" | "blue" | "black" | "red" | "green";

const COLOR_LABELS: Record<Color, string> = {
  white: "White",
  blue: "Blue",
  black: "Black",
  red: "Red",
  green: "Green",
};

const COLOR_HEX: Record<Color, string> = {
  white: "#FFFFFF",
  blue: "#2196F3",
  black: "#111111",
  red: "#F44336",
  green: "#4CAF50",
};

interface ColorSelectorProps {
  onSelect: (selectedCombo: { id: string; label: string; colors: Color[] }) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<Color[]>([]);

  const toggleColor = (color: Color) => {
    setSelected((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSubmit = () => {
    // Find the matching combination
    const match = (colorCombinations as any).combinations.find((combo: any) => {
      return (
        combo.colors.length === selected.length &&
        combo.colors.every((c: string) => selected.includes(c))
      );
    });
    if (match) {
      onSelect(match);
    } else {
      alert("No matching color combination found.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Select Your Colors</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
        {Object.keys(COLOR_LABELS).map((color) => (
          <button
            key={color}
            onClick={() => toggleColor(color as Color)}
            style={{
              background: COLOR_HEX[color as Color],
              color: color === "white" ? "#222" : "#fff",
              border: selected.includes(color as Color) ? "3px solid #333" : "1px solid #aaa",
              borderRadius: "50%",
              width: 60,
              height: 60,
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
              outline: "none",
              boxShadow: selected.includes(color as Color)
                ? "0 0 10px #333"
                : "0 0 4px #aaa",
              transition: "all 0.2s",
            }}
            aria-pressed={selected.includes(color as Color)}
          >
            {COLOR_LABELS[color as Color]}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected.length === 0}
        style={{
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
          border: "none",
          cursor: selected.length === 0 ? "not-allowed" : "pointer",
          opacity: selected.length === 0 ? 0.5 : 1,
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default ColorSelector;