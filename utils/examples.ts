import type { ConceptMapData } from "../types"

export const conceptMapExamples: Record<string, ConceptMapData> = {
  "Example 1": {
    title: "Programming Paradigms",
    subtitle: "Basic Overview",
    root: {
      text: "Programming Paradigms",
      relations: [
        {
          text: "defines",
          node: {
            text: "Imperative",
            relations: [
              {
                text: "includes",
                node: {
                  text: "Procedural",
                  relations: [
                    {
                      text: "example",
                      node: { text: "C" },
                    },
                  ],
                },
              },
              {
                text: "includes",
                node: {
                  text: "Object-Oriented",
                  relations: [
                    {
                      text: "example",
                      node: { text: "Java" },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          text: "defines",
          node: {
            text: "Declarative",
            relations: [
              {
                text: "includes",
                node: {
                  text: "Functional",
                  relations: [
                    {
                      text: "example",
                      node: { text: "Haskell" },
                    },
                  ],
                },
              },
              {
                text: "includes",
                node: {
                  text: "Logic",
                  relations: [
                    {
                      text: "example",
                      node: { text: "Prolog" },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  "Example 2": {
    title: "Web Development Ecosystem",
    subtitle: "Comprehensive Overview",
    root: {
      text: "Web Development",
      relations: [
        {
          text: "frontend",
          node: {
            text: "Frontend Development",
            relations: [
              {
                text: "core",
                node: {
                  text: "Core Technologies",
                  relations: [
                    {
                      text: "markup",
                      node: {
                        text: "HTML5",
                        relations: [
                          {
                            text: "includes",
                            node: { text: "Semantic Elements" },
                          },
                          {
                            text: "includes",
                            node: { text: "Forms" },
                          },
                        ],
                      },
                    },
                    {
                      text: "styling",
                      node: {
                        text: "CSS3",
                        relations: [
                          {
                            text: "includes",
                            node: { text: "Flexbox" },
                          },
                          {
                            text: "includes",
                            node: { text: "Grid" },
                          },
                        ],
                      },
                    },
                    {
                      text: "programming",
                      node: {
                        text: "JavaScript",
                        relations: [
                          {
                            text: "includes",
                            node: { text: "ES6+" },
                          },
                          {
                            text: "includes",
                            node: { text: "TypeScript" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                text: "frameworks",
                node: {
                  text: "Frameworks",
                  relations: [
                    {
                      text: "popular",
                      node: {
                        text: "React",
                        relations: [
                          {
                            text: "includes",
                            node: { text: "Hooks" },
                          },
                          {
                            text: "includes",
                            node: { text: "Components" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          text: "backend",
          node: {
            text: "Backend Development",
            relations: [
              {
                text: "includes",
                node: {
                  text: "Server Technologies",
                  relations: [
                    {
                      text: "runtime",
                      node: {
                        text: "Node.js",
                        relations: [
                          {
                            text: "framework",
                            node: { text: "Express" },
                          },
                        ],
                      },
                    },
                    {
                      text: "includes",
                      node: {
                        text: "Databases",
                        relations: [
                          {
                            text: "type",
                            node: { text: "SQL" },
                          },
                          {
                            text: "type",
                            node: { text: "NoSQL" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  "Example 3": {
    title: "El Agua",
    subtitle: "Mapa Conceptual del Agua",
    root: {
      text: "El Agua",
      relations: [
        {
          text: "es necessaria para",
          node: {
            text: "Seres vivos",
            relations: [
              {
                text: "por ejemplo",
                node: {
                  text: "plantas",
                  relations: [
                    {
                      text: "ejemplo",
                      node: {
                        text: "un roble",
                      },
                    },
                  ],
                },
              },
              {
                text: "por ejemplo",
                node: {
                  text: "animales",
                  relations: [
                    {
                      text: "ejemplo",
                      node: {
                        text: "un perro",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          text: "formada por",
          node: {
            text: "Moléculas",
            relations: [
              {
                text: "estan en",
                node: {
                  text: "movimiento",
                  relations: [
                    {
                      text: "provocado por",
                      node: {
                        text: "calor",
                        relations: [
                          {
                            text: "de",
                            node: {
                              text: "la cocina",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          text: "cambia",
          node: {
            text: "estado",
            relations: [
              {
                text: "puede ser",
                node: {
                  text: "sólido",
                  relations: [
                    {
                      text: "como en",
                      node: {
                        text: "nieve",
                        relations: [
                          {
                            text: "ejemplo de",
                            node: {
                              text: "nevada",
                            },
                          },
                        ],
                      },
                    },
                    {
                      text: "como",
                      node: {
                        text: "hielo",
                        relations: [
                          {
                            text: "ejemplo",
                            node: {
                              text: "Isbert",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                text: "puede ser",
                node: {
                  text: "gas",
                  relations: [
                    {
                      text: "como en",
                      node: {
                        text: "vapor",
                        relations: [
                          {
                            text: "de una",
                            node: {
                              text: "caldera",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                text: "puede ser",
                node: {
                  text: "líquido",
                  relations: [
                    {
                      text: "como en",
                      node: {
                        text: "niebla",
                      },
                    },
                    {
                      text: "como en",
                      node: {
                        text: "lago",
                        relations: [
                          {
                            text: "por ejemplo",
                            node: {
                              text: "arenal",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
}

export const defaultConceptMapJSON: ConceptMapData = {
  title: "Concept Map Title",
  subtitle: "Concept Map Subtitle",
  root: {
    text: "Root Concept",
    relations: [
      {
        text: "relation",
        node: {
          text: "Child Concept",
        },
      },
    ],
  },
}

