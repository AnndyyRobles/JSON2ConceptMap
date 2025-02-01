"use client"

import { useRef } from "react"
import type { ConceptMapData } from "../types"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import html2canvas from "html2canvas"
import { getColorByIndex } from "../utils/colors"

interface ConceptNodeProps {
  node: ConceptMapData["root"]
  level: number
  isRoot?: boolean
}

function ConceptNode({ node, level, isRoot = false }: ConceptNodeProps) {
  const color = getColorByIndex(level - 1)
  const hasChildren = node.relations && node.relations.length > 0

  return (
    <div className="flex flex-col items-center">
      <div
        className={`px-4 py-2 rounded-lg border-2 ${color.border} ${color.bg} text-gray-800 font-medium
          ${isRoot ? "text-lg" : "text-base"} relative z-10`}
      >
        {node.text}
      </div>
      {hasChildren && (
        <div className="mt-8 relative">
          {/* Línea vertical desde el nodo padre */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 -top-8 bg-gray-400" />

          <div className="relative">
            {/* Línea horizontal que une las líneas verticales */}
            {node.relations.length > 1 && (
              <div className="absolute top-0 left-4 right-4 flex justify-between items-center">
                <div className="flex-grow h-px bg-gray-400" />
              </div>
            )}

            <div className="flex justify-between" style={{ gap: node.relations.length > 1 ? "48px" : "0" }}>
              {node.relations.map((relation, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Línea vertical que va desde la línea horizontal hasta el nodo hijo */}
                  <div className="w-px h-20 bg-gray-400" />

                  {/* Texto de relación */}
                  <div className="text-sm text-gray-500 my-2 relative z-10 bg-white px-2">{relation.text}</div>

                  <div className="mt-2">
                    <ConceptNode node={relation.node} level={level + 1} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ConceptMap({ data }: { data: ConceptMapData }) {
  const mapRef = useRef<HTMLDivElement>(null)

  const downloadImage = async () => {
    if (mapRef.current) {
      const canvas = await html2canvas(mapRef.current)
      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = "concept-map.png"
      link.click()
    }
  }

  return (
    <div className="relative mb-8">
      <div className="relative">
        <div className="flex justify-center">
          <div ref={mapRef} className="bg-white p-12 rounded-lg shadow-lg inline-block relative">
            <Button
              onClick={downloadImage}
              className="absolute top-4 right-4 bg-[#1b207c] hover:bg-[#161969] text-white rounded-md px-3 py-2 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span className="text-sm font-medium">Download</span>
            </Button>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-light tracking-wide text-gray-800 mb-2">{data.title}</h1>
              <h2 className="text-xl font-light tracking-wider text-gray-600 uppercase">{data.subtitle}</h2>
            </div>
            <div className="flex justify-center py-8">
              <ConceptNode node={data.root} level={1} isRoot={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

