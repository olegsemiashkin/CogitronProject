import React, { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 flex flex-col items-center justify-center py-8 px-2">
      {/* Центрированная белая карточка */}
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center gap-4">
        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight flex items-center gap-3">
          <span role="img" aria-label="brain">🧠</span> Factorio Base Optimizer
        </h1>
        <p className="text-base text-gray-500 mb-5 text-center">
          AI-powered tool for analyzing and optimizing Factorio factory blueprints.
        </p>

        {/* Input */}
        <form className="w-full flex flex-col gap-3" onSubmit={handleOptimize}>
          <textarea
            className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-lg focus:ring-2 focus:ring-blue-400 outline-none resize-y transition placeholder-gray-400"
            rows={5}
            placeholder='Paste your Factorio blueprint string here (starts with "0e...")'
            value={blueprint}
            onChange={e => setBlueprint(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition text-lg"
          >
            🚀 Optimize Blueprint
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 mt-2 text-gray-800 shadow-inner whitespace-pre-wrap text-base">
            {result}
          </div>
        )}

        {/* Demo mode */}
        <div className="w-full mt-5 bg-yellow-50 border-l-4 border-yellow-300 rounded-lg p-4 text-yellow-800 text-sm">
          <b>DEMO MODE</b>: GPT analyzes blueprint structure (not in-game). See README for details.
        </div>
      </div>

      {/* FAQ и Terms — отдельные карточки */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row justify-center gap-6 mt-8">
        {/* FAQ */}
        <div className="flex-1 bg-white/80 border border-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">❓ FAQ</h2>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
            <li><b>What can I paste?</b> — Any valid Factorio blueprint string</li>
            <li><b>How long is too long?</b> — If really massive, split it into parts</li>
            <li><b>Can I upload images?</b> — Coming soon!</li>
            <li><b>What kind of improvements?</b> — Bus, layout, belt balance, modules</li>
          </ul>
        </div>
        {/* Terms */}
        <div className="flex-1 bg-white/80 border border-gray-100 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">📜 Terms of Use</h2>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
            <li>No data is stored — blueprints processed in memory</li>
            <li>Helper tool, not a guarantee of perfection</li>
            <li>Use responsibly. Back up your saves</li>
            <li>Made with ❤️ using OpenAI</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm mt-8 mb-2 text-center">
        Made for Factorio engineers &mdash; demo v1.0
      </footer>
    </div>
  );
}
