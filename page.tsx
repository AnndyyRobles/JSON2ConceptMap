"use client"

import { useState } from "react"
import { Montserrat } from "next/font/google"
import { conceptMapExamples, defaultConceptMapJSON } from "./utils/examples"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ConceptMap from "./components/concept-map"
import type { ConceptMapData } from "./types"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Generator() {
  const [jsonInput, setJsonInput] = useState(() => {
    return JSON.stringify(defaultConceptMapJSON, null, 2)
  })
  const [generatedData, setGeneratedData] = useState<ConceptMapData | null>(null)
  const [error, setError] = useState("")

  const loadExample = (type: string) => {
    setJsonInput(JSON.stringify(conceptMapExamples[type], null, 2))
    setError("")
  }

  const generateVisualization = () => {
    try {
      const parsedData = JSON.parse(jsonInput)

      if (!parsedData.title || !parsedData.subtitle || !parsedData.root) {
        throw new Error("Invalid concept map JSON structure")
      }

      setGeneratedData(parsedData)
      setError("")
    } catch (err) {
      setError("Invalid JSON format. Please check your input.")
      setGeneratedData(null)
    }
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${montserrat.className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wide text-gray-800 mb-3">Concept Map Generator</h1>
          <p className="text-lg text-gray-600 mb-6">Create beautiful concept maps from JSON data</p>

          {/* Example buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {Object.keys(conceptMapExamples).map((exampleKey) => (
              <Button key={exampleKey} variant="outline" onClick={() => loadExample(exampleKey)}>
                {exampleKey}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Enter your JSON</h2>
          <Textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="font-mono text-sm min-h-[300px] mb-4"
            placeholder="Paste your JSON here..."
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button onClick={generateVisualization} className="w-full">
            Generate Concept Map
          </Button>
        </div>

        {generatedData && <ConceptMap data={generatedData} />}
      </div>
    </div>
  )
}

