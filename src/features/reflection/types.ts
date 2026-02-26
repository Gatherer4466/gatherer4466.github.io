export interface Reflection {
  week: number
  devopsReflection: ReflectionContent
  webReflection: ReflectionContent
}

export interface ReflectionContent {
  knowledge: string
  abilities: string
  skills: string
  type: 'devops' | 'web'
}
