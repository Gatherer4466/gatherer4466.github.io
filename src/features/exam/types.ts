export type ExamBlock =
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; url: string }
  | { type: 'youtube'; embedUrl: string }
  | { type: 'note'; content: string }
  | {
      type: 'file'
      title: string
      file: string
      preview?: string
      format?: string
    }
  | { type: 'goal'; knowledge: string[]; skills: string[]; competencies: string[] }
// | { type: 'text'; content: string }
// | { type: 'code'; language: string; content: string }

export interface ExamInformation {
  id: number
  title: string
  description?: string
  blocks: ExamBlock[]
}
