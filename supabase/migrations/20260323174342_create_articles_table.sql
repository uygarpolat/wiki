create extension if not exists pgcrypto with schema extensions;

create table public.articles (
  id uuid primary key default extensions.gen_random_uuid(),
  slug text not null unique,
  source_language text not null default 'en',
  wikipedia_title text not null,
  wikipedia_url text not null,
  wikipedia_revision_id text,
  source_extract text not null,
  summary_text text not null,
  article_history_url text not null,
  attribution_text text not null,
  category text not null default '',
  reading_minutes integer not null default 3,
  quality_status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint articles_reading_minutes_positive check (reading_minutes > 0),
  constraint articles_quality_status_check check (quality_status in ('draft', 'published', 'archived'))
);

create index articles_quality_status_published_at_idx
  on public.articles (quality_status, published_at desc nulls last);

create index articles_category_idx on public.articles (category);

alter table public.articles enable row level security;

create policy "public can read published articles"
on public.articles
for select
to anon
using (quality_status = 'published' and published_at is not null);
