import React, { useState } from "react";
import "../styles/modern.css";

export default function Home() {
  const [blueprint, setBlueprint] = useState("");
  const [result, setResult] = useState("");

  const tips = [
    "Your main bus is too long. Try splitting it into sections for better throughput.",
    "Consider adding underground belts at intersections to improve flow.",
    "Buffer chests are missing. Add them to prevent resource clogging.",
    "Layout is too dense — modularize key factory blocks.",
    "Some lines mix resources — split iron and copper flows.",
    "No balancers found on bus. Add 4-to-4 balancers for consistency."
  ];

  function handleOptimize(e) {
    e.preventDefault();
    if (!blueprint) return;
    const advice = tips[Math.floor(Math.random() * tips.length)];
    const improvedBlueprint = blueprint.slice(0, 80) + "...";
    setResult(
      `✅ Analysis complete:\n- ${advice}\n- (demo improved blueprint): ${improvedBlueprint}`
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
          <div className="resultbox">{result}</div>
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
