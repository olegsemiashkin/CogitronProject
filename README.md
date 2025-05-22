## 🟡 DEMO MODE — How It Works

This project is currently running in demo mode.

- The analysis does **not** run inside Factorio. GPT models (or any LLM) **cannot insert blueprints into the game** or simulate actual gameplay.
- The optimizer analyzes the **JSON structure** of your blueprint string, not the game itself.
- It “guesses” typical mistakes: too many lines, long belts, missing balancers, messy/overstretched layouts, missing buffers, missing input/output labels, tangled power, mixed resources, etc.
- Deep optimization (real throughput calculation, bottleneck simulation) is **impossible** without an external blueprint parser or Factorio mod.

### What GPT-based systems can do:
- Parse your blueprint (even encoded)
- Provide best-practice suggestions like:
  - “Your main bus is too long, try to split it into sections”
  - “Use underground belts at line crossings”
  - “You have excessive spaghetti, better to modularize blocks”
  - “Add buffer chests for high-throughput lines”
- Occasionally, it can generate an improved blueprint string (but not guaranteed to work in-game without manual test)

### For real simulation or in-game testing:
This would require integration with Factorio mod API or an external parser, a headless server, and custom code (not included here).

---
