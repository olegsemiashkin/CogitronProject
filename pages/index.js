
import { useState } from 'react'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export default function FactorioOptimizer() {
  const [blueprint, setBlueprint] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOptimize = async () => {
    if (!blueprint.trim()) return
    setLoading(true)
    setResult('')

    const res = await fetch('/api/optimize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blueprint })
    })

    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 space-y-8">
      <div className="max-w-3xl w-full text-center space-y-4">
        <h1 className="text-4xl font-bold text-amber-400 drop-shadow-md">Factorio Base Optimizer</h1>
        <p className="text-gray-300 text-lg">
          Turn your messy megabase into a masterpiece. Paste your blueprint string below — and get clean, scalable results.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        <Textarea
          value={blueprint}
          onChange={(e) => setBlueprint(e.target.value)}
          rows={8}
          placeholder="Paste your Factorio blueprint string here..."
        />
        <Button onClick={handleOptimize} disabled={loading}>
          {loading ? 'Optimizing...' : '🚀 Optimize Blueprint'}
        </Button>
      </div>

      {result && (
        <Card className="max-w-2xl w-full">
          <CardContent className="whitespace-pre-wrap p-4 text-sm">
            {result}
          </CardContent>
        </Card>
      )}

      <section className="max-w-3xl mt-16 text-left space-y-6">
        <h2 className="text-2xl font-semibold text-amber-400">❓ FAQ</h2>
        <ul className="text-gray-300 space-y-2 list-disc pl-6">
          <li><strong>What can I paste?</strong> — Any valid Factorio blueprint string (starts with "0e...")</li>
          <li><strong>How long is too long?</strong> — If it's really massive, split it into parts</li>
          <li><strong>Can I upload images?</strong> — Soon. Screenshot-based analysis is planned!</li>
          <li><strong>What kind of improvements?</strong> — Bus optimization, layout suggestions, belt balance, module positioning</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-400">📜 Terms of Use</h2>
        <ul className="text-gray-400 space-y-2 list-disc pl-6">
          <li>No data is stored — your blueprints are processed in memory</li>
          <li>This is a helper tool, not a guarantee of perfection</li>
          <li>Use responsibly. Back up your save files</li>
          <li>Built with ❤️ using OpenAI</li>
        </ul>
      </section>

      <footer className="text-gray-600 text-sm mt-12 mb-4">
        Made with ❤️ for Factorio engineers — v1.0
      </footer>
    </main>
  )
}
