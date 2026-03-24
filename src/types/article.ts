export type Article = {
  id: string;
  title: string;
  category: string;
  readingMinutes: number;
  summaryParagraphs: string[];
  sourceExtract: string;
  sourceUrl: string;
  sourceHistoryUrl: string;
  attribution: string;
};
