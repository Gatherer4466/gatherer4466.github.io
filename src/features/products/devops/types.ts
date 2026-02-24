export interface DevOpsFile {
  filename: string
  language: 'yaml' | 'json' | 'bash' | 'dockerfile'
  content: string
}

export interface DevOpsProduct {
  id: number
  title: string
  description: string
  purpose: string
  trigger: string
  files: DevOpsFile[]
  repository?: string
}
