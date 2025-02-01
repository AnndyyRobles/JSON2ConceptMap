export const conceptMapColors = [
  { bg: "bg-custom-red", border: "border-red-500" },
  { bg: "bg-custom-orange", border: "border-orange-500" },
  { bg: "bg-custom-yellow", border: "border-yellow-400" },
  { bg: "bg-custom-green", border: "border-green-500" },
  { bg: "bg-custom-blue", border: "border-blue-500" },
  { bg: "bg-custom-pink", border: "border-pink-500" },
]

export const getColorByIndex = (index: number) => {
  return conceptMapColors[index % conceptMapColors.length]
}

