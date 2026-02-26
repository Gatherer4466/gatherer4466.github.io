export interface Reflection {
  week: number
  devopsReflection: ReflectionContent
  webReflection: ReflectionContent
}

interface ReflectionContent {
  knowledge: string
  abilities: string
  skills: string
}
