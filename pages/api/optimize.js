export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ result: 'Method not allowed' });
  }

  const { blueprint } = req.body;
  if (!blueprint || typeof blueprint !== 'string') {
    return res.status(400).json({ result: 'Invalid blueprint input' });
  }

  // Пример анализа (можно добавить генератор случайных советов)
  const tips = [
    "Your main bus is too long. Try splitting it into sections for better throughput.",
    "Consider adding underground belts at intersections to improve flow.",
    "Buffer chests are missing. Add them to prevent resource clogging.",
    "Layout is too dense — modularize key factory blocks.",
    "Some lines mix resources — split iron and copper flows.",
    "No balancers found on bus. Add 4-to-4 balancers for consistency."
  ];
  const advice = tips[Math.floor(Math.random() * tips.length)];

  const improvedBlueprint = blueprint.slice(0, 80) + '...'; // Просто демонстрация
  const message = `✅ **Analysis complete**:\n- ${advice}\n- (demo improved blueprint): ${improvedBlueprint}`;

  res.status(200).json({ result: message });
}
