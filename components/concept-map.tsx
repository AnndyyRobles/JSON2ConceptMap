"use client"

import { useRef } from "react"
import type { ConceptMapData } from "../types"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import html2canvas from "html2canvas"

interface ConceptNodeProps {
  node: ConceptMapData["root"]
  level: number
  isRoot?: boolean
}

function ConceptNode({ node, level, isRoot = false }: ConceptNodeProps) {
  const hasChildren = node.relations && node.relations.length > 0

  return (
    <div className="flex flex-col items-center">
      <div
        className={`px-4 rounded-lg border-2 text-white
          ${isRoot ? "text-lg" : "text-base"} relative z-10 text-center`}
        style={{
          minHeight: isRoot ? "56px" : "48px",
          padding: "10px 15px",
          background: "rgb(28,32,119)",
          backgroundImage:
            "linear-gradient(319deg, rgba(28,32,119,1) 0%, rgba(37,123,179,1) 29%, rgba(40,155,200,1) 44%, rgba(41,161,203,1) 47%, rgba(41,165,206,1) 51%, rgba(41,163,205,1) 54%, rgba(41,157,201,1) 58%, rgba(41,131,186,1) 67%, rgba(42,47,137,1) 100%)",
          fontFamily: "'Playpen Sans', cursive",
          fontWeight: 500,
          textShadow: "0px 0px 1px rgba(255,255,255,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {node.text}
      </div>
      {hasChildren && (
        <div className="mt-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 -top-8 bg-gray-400" />
          <div className="relative">
            {node.relations.length > 1 && (
              <div className="absolute top-0 left-4 right-4 flex justify-between items-center">
                <div className="flex-grow h-px bg-gray-400" />
              </div>
            )}
            <div className="flex justify-between" style={{ gap: node.relations.length > 1 ? "48px" : "0" }}>
              {node.relations.map((relation, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className="w-px h-20 bg-gray-400" />
                  <div
                    className="text-sm text-gray-500 my-2 relative z-10 bg-white px-2 text-center"
                    style={{
                      minHeight: "24px",
                      padding: "5px 10px",
                      fontFamily: "'Playpen Sans', cursive",
                      fontWeight: 300,
                      textShadow: "0px 0px 1px rgba(0,0,0,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {relation.text}
                  </div>
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
      const canvas = await html2canvas(mapRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.body.querySelector("[data-html2canvas-ignore]")
          if (clonedElement) {
            clonedElement.remove()
          }
        },
      })
      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = "concept-map.png"
      link.click()
    }
  }

  return (
    <div className="relative mb-8">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap');
      `}</style>
      <div className="relative">
        <div className="flex justify-center">
          <div ref={mapRef} className="bg-white p-12 rounded-lg shadow-lg inline-block relative">
            <Button
              onClick={downloadImage}
              className="absolute top-4 right-4 bg-[#1b207c] hover:bg-[#161969] text-white rounded-md px-3 py-2 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg flex items-center space-x-2"
              data-html2canvas-ignore="true"
            >
              <Download className="h-5 w-5" />
              <span className="text-sm font-medium">Download</span>
            </Button>
            <div className="mb-12 text-center">
              <h1
                className="text-4xl font-light tracking-wide text-gray-800 mb-2 text-center"
                style={{
                  height: "48px",
                  lineHeight: "48px",
                  fontFamily: "'Playpen Sans', cursive",
                  fontWeight: 500,
                }}
              >
                {data.title}
              </h1>
              <h2
                className="text-xl font-light tracking-wider text-gray-600 uppercase text-center"
                style={{
                  height: "32px",
                  lineHeight: "32px",
                  fontFamily: "'Playpen Sans', cursive",
                  fontWeight: 300,
                }}
              >
                {data.subtitle}
              </h2>
            </div>
            <div className="flex justify-center py-8">
              <ConceptNode node={data.root} level={1} isRoot={true} />
            </div>
            <div className="mt-8 text-center">
              <div
                className="inline-block text-sm text-gray-400 font-medium"
                style={{
                  height: "24px",
                  lineHeight: "24px",
                  fontFamily: "'Playpen Sans', cursive",
                  fontWeight: 300,
                }}
              >
                Created with
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 550 200"
                  className="h-6 ml-2 inline-block"
                  style={{
                    verticalAlign: "middle",
                    marginTop: "-2px",
                  }}
                >
                  <text
                    x="40"
                    y="130"
                    fontFamily="Arial, sans-serif"
                    fontWeight="900"
                    fontSize="100"
                    fill="#1b207c"
                    style={{ letterSpacing: "-2px" }}
                  >
                    JSON2
                  </text>
                  <circle cx="460" cy="100" r="50" fill="none" stroke="#1b207c" strokeWidth="8" />
                  <line x1="460" y1="58" x2="460" y2="70" stroke="#1b207c" strokeWidth="6" />
                  <line x1="460" y1="130" x2="460" y2="142" stroke="#1b207c" strokeWidth="6" />
                  <line x1="418" y1="100" x2="430" y2="100" stroke="#1b207c" strokeWidth="6" />
                  <line x1="490" y1="100" x2="502" y2="100" stroke="#1b207c" strokeWidth="6" />
                  <line x1="460" y1="100" x2="460" y2="70" stroke="#1b207c" strokeWidth="6" strokeLinecap="round" />
                  <line x1="460" y1="100" x2="490" y2="100" stroke="#1b207c" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="460" cy="100" r="6" fill="#1b207c" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

