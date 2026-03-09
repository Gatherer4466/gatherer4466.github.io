export type GeneralBlock =
  // | { type: 'text'; content: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; url: string }
  | { type: 'note'; content: string }
  // | { type: 'code'; language: string; content: string }

export interface GeneralProduct {
  id: number
  title: string
  description?: string
  date: string
  blocks: GeneralBlock[]
}
