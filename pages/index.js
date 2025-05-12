
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
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Factorio Base Optimizer</h1>
      <p className="text-muted-foreground">
        Paste your Factorio blueprint string below to receive optimization suggestions and a new version.
      </p>
      <Textarea
        value={blueprint}
        onChange={(e) => setBlueprint(e.target.value)}
        rows={8}
        placeholder="Paste your blueprint string here..."
      />
      <Button onClick={handleOptimize} disabled={loading}>
        {loading ? 'Optimizing...' : 'Optimize'}
      </Button>
      {result && (
        <Card>
          <CardContent className="whitespace-pre-wrap p-4 text-sm">
            {result}
          </CardContent>
        </Card>
      )}
    </main>
  )
}
