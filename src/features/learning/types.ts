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
  category: 'vue' | 'devops'
  title: string
  blocks: LearningBlock[]
}

