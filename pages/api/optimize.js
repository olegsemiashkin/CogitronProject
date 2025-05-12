
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { blueprint } = req.body

  const prompt = `Here is a Factorio blueprint string:\n\n${blueprint}\n\nAnalyze this blueprint and provide:\n- Design and layout issues\n- Suggestions for logistics, balancing, and modularity\n- An improved blueprint string if possible`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a Factorio engineer bot. You improve factory layouts.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4
      })
    })

    const json = await response.json()
    const reply = json.choices?.[0]?.message?.content

    res.status(200).json({ result: reply || 'No response from model.' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ result: 'Error calling GPT API.' })
  }
}
