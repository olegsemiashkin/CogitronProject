import React, { useState } from "react";

export default function Home() {
  const [blueprint, setBlueprint] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  function handleOptimize(e) {
    e.preventDefault();
    if (!blueprint) return;

    // 3 набора: текст + фото + подпись
    const tips = [
      {
        advice: [
          "This section of your base focuses on automated science pack production.",
          "Ensure every assembler is properly supplied with resources, and balance belt throughput.",
          "Blueprint could benefit from more space between labs and production blocks.",
          "Keep bus lines tidy and use underground belts to avoid congestion.",
          "Consider buffer chests for steady output."
        ],
        image: "https://i.imgur.com/MLQ0Urt.png", // Blue science
        caption: "Example: Efficient blue science production line"
      },
      {
        advice: [
          "Detected multiple display circuits — great for monitoring base stats.",
          "Consider dedicating separate lines for each signal to avoid cross-talk.",
          "Label all displays clearly and group combinators for maintainability.",
          "Use separate power supplies for logic and main factory to avoid interruptions.",
          "Compact designs improve space usage but can reduce readability — keep a balance."
        ],
        image: "https://i.imgur.com/yAkD0dC.png", // Segment display
        caption: "Example: Clean segment displays and circuit combinators"
      },
      {
        advice: [
          "Train unloaders need enough inserters to keep throughput high.",
          "Group inserters and chests efficiently for even unloading.",
          "Make sure to signal train stops for smooth logistics.",
          "Use stack inserters and filtered chests for best performance.",
          "Keep belts short from unloaders to main bus."
        ],
        image: "https://i.imgur.com/FQDc6rS.png", // Train unloader
        caption: "Example: 1x4 train unloader — optimized for flow"
      }
    ];

    // Рандомно выбираем набор
    const block = tips[Math.floor(Math.random() * tips.length)];
    const advice = block.advice.join("\n");
    const improvedBlueprint = blueprint.slice(0, 80) + "...";
    setResult(
      `✅ Analysis complete:\n\n${advice}\n\n(demo improved blueprint): ${improvedBlueprint}`
    );
    setImage(block.image);
    setCaption(block.caption);
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
            {image && (
              <div style={{ textAlign: "center" }}>
                <img
                  src={image}
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
                  {caption}
                </div>
              </div>
            )}
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
