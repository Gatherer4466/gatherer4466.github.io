export interface Source {
  id: number;
  title: string;
  author: string;
  url: string;
  accessed: string;
  note?: string;
  validity: number;
  validityNote: string;
  type: string;
  subjectKey: SubjectKey;
}

export enum SubjectKey {
  WebDevelopment = "web",
  devOps = "devOps"
}
