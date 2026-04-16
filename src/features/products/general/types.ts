export type GeneralBlock =
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; url: string }
  | { type: 'note'; content: string }
  | {
      type: 'file'
      title: string
      file: string
      preview?: string
      format?: string
    }
// | { type: 'text'; content: string }
// | { type: 'code'; language: string; content: string }

export interface GeneralProduct {
  id: number
  title: string
  description?: string
  date: string
  blocks: GeneralBlock[]
}
