export const conceptMapColors = [
  { bg: "bg-red-50", border: "border-red-500" },
  { bg: "bg-orange-50", border: "border-orange-500" },
  { bg: "bg-yellow-50", border: "border-yellow-400" },
  { bg: "bg-green-50", border: "border-green-500" },
  { bg: "bg-blue-50", border: "border-blue-500" },
  { bg: "bg-pink-50", border: "border-pink-500" },
]

export const getColorByIndex = (index: number) => {
  return conceptMapColors[index % conceptMapColors.length]
}

