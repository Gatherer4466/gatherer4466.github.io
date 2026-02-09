export type ContentType =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "image" | "gif";
      src: string;
    };

export interface LogEntry {
  id: string;
  title: string;
  date: string;
  content: ContentType[];
}
