// Types for the concept map
export interface ConceptNode {
  text: string
  relations?: Array<{
    text: string
    node: ConceptNode
  }>
}

export interface ConceptMapData {
  title: string
  subtitle: string
  root: ConceptNode
}

