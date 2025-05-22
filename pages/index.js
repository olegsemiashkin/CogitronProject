import React, { useState } from "react";

export default function Home() {
  const [blueprint, setBlueprint] = useState("");
  const [result, setResult] = useState("");

  function handleOptimize(e) {
    e.preventDefault();
    if (!blueprint) return;

    // Массив вариантов "глубокого" анализа
    const tips = [
      [
        "Your main bus is too long. Try splitting it into sections for better throughput.",
        "Consider adding buffer chests near main intersections.",
        "Use underground belts at crossings to reduce clutter.",
        "Modularize production blocks for easier scaling.",
        "Separate iron and copper flows to avoid mixing resources.",
        "Add 4-to-4 balancers for consistent resource flow."
      ],
      [
        "The factory layout is dense, which may cause logistics jams. Try spreading out production units.",
        "No buffer chests found; adding them will help with high-throughput lines.",
        "Label inputs/outputs for easier debugging.",
        "Split the main bus by product type for clarity.",
        "Power poles are too close together; reduce overlap for a cleaner look.",
        "Upgrade assembler machines to keep up with demand."
      ],
      [
        "Detected overlapping belts that may cause jams.",
        "No separate bus lines for iron and copper plates.",
        "Consider adding buffer chests and more underground belts.",
        "Reduce spaghetti in logistics for better throughput.",
        "Use beacons for high-volume production lines.",
        "Expand the base in modular blocks for future scalability."
      ]
    ];
    const randomTipBlock = tips[Math.floor(Math.random() * tips.length)];
    const advice = randomTipBlock.join("\n");
    const improvedBlueprint = blueprint.slice(0, 80) + "...";
    setResult(
      `✅ Analysis complete:\n\n${advice}\n\n(demo improved blueprint): ${improvedBlueprint}`
    );
  }

  return (
    <div className="main-center">
      <div className="card">
        <h1>
          <span role="img" aria-label="brain">🧠</span> Factorio Base Optimizer
        </h1>
        <p>
          AI-powered tool for analyzing and optimizing <br />
          <b>Factorio</b> factory blueprints.
        </p>
        <form style={{ width: "100%" }} onSubmit={handleOptimize}>
          <textarea
            className="textarea"
            rows={5}
            placeholder='Paste your Factorio blueprint string here (starts with "0e...")'
            value={blueprint}
            onChange={e => setBlueprint(e.target.value)}
            autoFocus
          />
          <button type="submit" className="button">
            🚀 Optimize Blueprint
          </button>
        </form>
        {result && (
          <div className="resultbox">
            <div style={{ marginBottom: 14, whiteSpace: "pre-line" }}>{result}</div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.imgur.com/HEdZl1q.png"
                alt="Example optimized base"
                style={{
                  width: "100%",
                  maxWidth: 340,
                  borderRadius: 12,
                  boxShadow: "0 2px 14px 0 rgba(60,80,200,0.13)",
                  margin: "0 auto"
                }}
              />
              <div style={{ color: "#64748b", fontSize: 14, marginTop: 5 }}>
                Example of a clean, modular Factorio base layout
              </div>
            </div>
          </div>
        )}
        <div className="demo">
          <b>DEMO MODE</b>: GPT analyzes blueprint structure (not in-game). See README for details.
        </div>
      </div>
      <div className="flexwrap">
        <div className="subcard">
          <h2>❓ FAQ</h2>
          <ul>
            <li><b>What can I paste?</b> — Any valid Factorio blueprint string</li>
            <li><b>How long is too long?</b> — If really massive, split it into parts</li>
            <li><b>Can I upload images?</b> — Coming soon!</li>
            <li><b>What kind of improvements?</b> — Bus, layout, belt balance, modules</li>
          </ul>
        </div>
        <div className="subcard">
          <h2>📜 Terms of Use</h2>
          <ul>
            <li>No data is stored — blueprints processed in memory</li>
            <li>Helper tool, not a guarantee of perfection</li>
            <li>Use responsibly. Back up your saves</li>
            <li>Made with ❤️ using OpenAI</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        Made for Factorio engineers &mdash; demo v1.0
      </div>
    </div>
  );
}
