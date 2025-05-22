# 🧠 Factorio Base Optimizer

An AI-powered tool to analyze and optimize Factorio base layouts using GPT-4.

🌐 **[Try the live demo → cogitron-project.vercel.app](https://cogitron-project.vercel.app/)**

---

## 💡 What It Does

You can upload:
- 🧱 **Blueprint strings** – just copy from Factorio via “Export to string”
- 📸 **Base screenshots** – for visual layout analysis *(coming soon)*

And receive:
- 📊 A detailed review of your factory’s layout
- 🎯 Specific suggestions: belt balancing, logistics, production alignment
- 🧱 A clean, improved blueprint string ready to import into the game

---

## 🛠 How It Works

1. **Paste your base blueprint** or upload an image
2. The optimizer detects inefficiencies and layout flaws
3. It returns recommendations + a cleaner, more scalable version of your base

---

## 📂 Example Workflow

1. Open your blueprint book in Factorio → **"Export to string"**
2. Paste the code into the tool
3. Get a response:
    - ✔️ Rebuilt main bus
    - ✔️ Organized production blocks
    - ✔️ Scalable and elegant layout

Built for factory perfectionists who care not just about launching rockets — but doing it beautifully.

---

## 🟡 DEMO MODE — How It Works

**This project is currently running in demo mode.**

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

## ❓ FAQ

**What can I paste?**  
Any valid Factorio blueprint string (starts with `0e...`).

**How long is too long?**  
If it's really massive, split it into parts.

**Can I upload images?**  
*Soon.* Screenshot-based analysis is planned!

**What kind of improvements?**  
Bus optimization, layout suggestions, belt balance, module positioning.

---

## 📜 Terms of Use

- No data is stored — your blueprints are processed in memory.
- This is a helper tool, not a guarantee of perfection.
- Use responsibly. Back up your save files.
- Built with ❤️ using OpenAI.

---

_Made for Factorio engineers — v1.0_
