export type TimeHorizon = 'short' | 'mid' | 'long'

export interface LearningGoal {
  id: string
  title: string
  description?: string
}

export interface LearningPlan {
  id: string
  category: 'vue' | 'devops'
  title: string
  longTermGoals: LearningGoal[]
  plan: {
    short: LearningGoal[]
    mid: LearningGoal[]
    long: LearningGoal[]
  }
}
