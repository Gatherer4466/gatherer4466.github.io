export type Category = 'vue' | 'devops'

export interface LearningBlock {
  id: string
  title: string
  type: 'week' | 'long'
  knowledge: string
  skills: string
  competencies: string
}

export interface LearningPlan {
  id: string
  category: Category
  title: string
  blocks: LearningBlock[]
}
