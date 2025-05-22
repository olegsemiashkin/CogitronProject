export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ result: 'Method not allowed' });
  }

  const { blueprint } = req.body;

  if (!blueprint || typeof blueprint !== 'string') {
    return res.status(400).json({ result: 'Invalid blueprint input' });
  }

  const prompt = `Here is a Factorio blueprint string:\n\n${blueprint}\n\nAnalyze this blueprint and provide:\n- Design and layout issues\n- Suggestions for logistics, balancing, and modularity\n- An improved blueprint string if possible`;

  try {
    const response = await fetch('https://api.openrouter.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'openchat/openchat-7b',
        messages: [
          { role: 'system', content: 'You are a Factorio engineer bot. You improve factory layouts.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(500).json({ result: `OpenRouter API error: ${errText}` });
    }

    const json = await response.json();
    const reply = json.choices?.[0]?.message?.content;

    res.status(200).json({ result: reply || 'No response from model.' });
  } catch (err) {
    // Временно выдаём всю ошибку наружу для отладки:
    res.status(500).json({ result: err?.message || err?.toString() || 'Unknown server error', stack: err?.stack });
  }
}
