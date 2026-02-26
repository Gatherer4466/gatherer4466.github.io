export interface Reflection {
  week: string
  devopsReflection: ReflectionContent
  webReflection: ReflectionContent
}

interface ReflectionContent {
  knowledge: string
  abilities: string
  skills: string
}
