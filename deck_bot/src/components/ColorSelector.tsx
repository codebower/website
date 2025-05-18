import React, { useState } from "react";
import colorCombinations from "../data/color_combinations.json";

// Official MTG color order: White, Blue, Black, Red, Green
const COLORS = ["white", "blue", "black", "red", "green"] as const;
type Color = typeof COLORS[number];

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

// You can download official MTG color mana symbols from Wikimedia Commons or Scryfall
// Example URLs (SVGs, public domain): https://commons.wikimedia.org/wiki/Category:Magic:_The_Gathering_mana_symbols
const COLOR_ICONS: Record<Color, string> = {
  white: "https://svgs.scryfall.io/card-symbols/W.png",
  blue: "https://svgs.scryfall.io/card-symbols/U.png",
  black: "https://svgs.scryfall.io/card-symbols/B.png",
  red: "https://svgs.scryfall.io/card-symbols/R.png",
  green: "https://svgs.scryfall.io/card-symbols/G.png",
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

  // Pentagon/star coordinates (relative to center)
  const radius = 90;
  const center = 100;
  const positions = COLORS.map((_, i) => {
    const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;
    return {
      left: center + radius * Math.cos(angle) - 30,
      top: center + radius * Math.sin(angle) - 30,
    };
  });

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Select Your Colors</h2>
      <div
        style={{
          position: "relative",
          width: 200,
          height: 200,
          margin: "2rem auto",
        }}
      >
        {COLORS.map((color, i) => (
          <button
            key={color}
            onClick={() => toggleColor(color)}
            style={{
              position: "absolute",
              ...positions[i],
              background: COLOR_HEX[color],
              border: selected.includes(color) ? "3px solid #333" : "1px solid #aaa",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: selected.includes(color)
                ? "0 0 10px #333"
                : "0 0 4px #aaa",
              cursor: "pointer",
              transition: "all 0.2s",
              outline: "none",
              padding: 0,
            }}
            aria-pressed={selected.includes(color)}
            title={COLOR_LABELS[color]}
          >
            <img
              src={COLOR_ICONS[color]}
              alt={COLOR_LABELS[color]}
              style={{
                width: 36,
                height: 36,
                filter: color === "white" ? "drop-shadow(0 0 2px #222)" : undefined,
              }}
            />
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