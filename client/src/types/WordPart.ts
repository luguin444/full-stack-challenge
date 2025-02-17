export type WordPart = {
  id: number;
  label: string;
  status?: "mastered" | "needs_work";
}

export enum WordPartStatus {
  MASTERED = "mastered",
  NEEDS_WORK = "needs_work",
}
