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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f7fafc] to-[#e2e8f0] py-8 px-2 font-sans">
      <div className="bg-white/90 shadow-2xl rounded-2xl px-8 py-10 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-3 text-gray-900 flex items-center gap-3 tracking-tight">
          <span role="img" aria-label="brain">🧠</span> Factorio Base Optimizer
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          The easiest way to analyze and optimize your Factorio base blueprints — instantly, with AI.
        </p>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleOptimize}
        >
          <textarea
            className="w-full rounded-xl border border-gray-300 p-4 mb-4 min-h-[96px] text-lg focus:ring-2 focus:ring-blue-400 outline-none resize-y transition"
            placeholder='Paste your Factorio blueprint string here (starts with "0e...")'
            value={blueprint}
            onChange={(e) => setBlueprint(e.target.value)}
          />
          <button
            type="submit"
            className="flex gap-2 items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition text-lg mb-3"
          >
            🚀 Optimize Blueprint
          </button>
        </form>
        {result && (
          <pre className="bg-gray-100 rounded-lg p-4 mt-4 w-full text-base text-gray-800 whitespace-pre-wrap shadow-inner">
            {result}
          </pre>
        )}
        <footer className="mt-10 w-full flex flex-col items-center gap-2 text-gray-400 text-sm">
          <span>
            Made with <span className="text-red-500">❤️</span> for Factorio engineers &mdash; demo v1.0
          </span>
        </footer>
      </div>
    </div>
  );
}
