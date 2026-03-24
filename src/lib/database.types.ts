export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          article_history_url: string;
          attribution_text: string;
          category: string;
          created_at: string;
          id: string;
          published_at: string | null;
          quality_status: 'archived' | 'draft' | 'published';
          reading_minutes: number;
          slug: string;
          source_extract: string;
          source_language: string;
          summary_text: string;
          updated_at: string;
          wikipedia_revision_id: string | null;
          wikipedia_title: string;
          wikipedia_url: string;
        };
        Insert: {
          article_history_url: string;
          attribution_text: string;
          category?: string;
          created_at?: string;
          id?: string;
          published_at?: string | null;
          quality_status?: 'archived' | 'draft' | 'published';
          reading_minutes?: number;
          slug: string;
          source_extract: string;
          source_language?: string;
          summary_text: string;
          updated_at?: string;
          wikipedia_revision_id?: string | null;
          wikipedia_title: string;
          wikipedia_url: string;
        };
        Update: {
          article_history_url?: string;
          attribution_text?: string;
          category?: string;
          created_at?: string;
          id?: string;
          published_at?: string | null;
          quality_status?: 'archived' | 'draft' | 'published';
          reading_minutes?: number;
          slug?: string;
          source_extract?: string;
          source_language?: string;
          summary_text?: string;
          updated_at?: string;
          wikipedia_revision_id?: string | null;
          wikipedia_title?: string;
          wikipedia_url?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
