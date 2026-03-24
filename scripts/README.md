# Curation Workflow

These scripts keep article selection outside the mobile app.

## Current assisted workflow

For now, the fastest operator workflow is:

1. provide a Wikipedia article URL
2. generate the Calm Wiki summary and metadata
3. append it to `data/manual-review/reviewed-articles.json`
4. rebuild `data/manual-review/reviewed-articles.sql`
5. import the cumulative reviewed set into Supabase

This keeps the process simple and auditable while the library is still small.

For now, if an official Wikipedia article title is long, formulaic, or event-encoded, the app title may be shortened editorially for readability as long as it stays descriptive and non-cryptic. A later schema revision should likely split display title from source article title.

Current content note:

- summaries should stay focused on the subject itself and should not refer to "this article" or otherwise break immersion with meta commentary
- summaries should explain any premise or concept that is essential to understanding why the subject matters, especially if the topic would otherwise feel cryptic on first read
- assume an interested, reasonably thoughtful general reader, not a specialist; define only the concepts that are doing real explanatory work
- if the central hook depends on a specific factual setup, surface that setup early rather than leaving the reader to infer it later
- if an article still feels thin or uninteresting even after that clarification pass, it should be rejected rather than forced into the library

Current ingestion note:

- revision metadata is not yet fully normalized; when a clean numeric revision ID is not captured through the current workflow, the reviewed JSON may contain a less consistent placeholder and this should be cleaned up in a later ingestion pass

## Intended future workflow

If the library grows, the better design is a two-step draft pipeline:

1. `URL -> draft`
2. human review / approval
3. approved draft -> publish/import

That would let us keep raw drafts separate from published entries, preserve a clearer review trail, and avoid auto-publishing low-quality summaries by accident.

## 1. Fetch candidate articles

```bash
npm run candidates:fetch -- --count 30 --output data/manual-review/candidates.json
```

This script:

- pulls random Wikipedia titles
- fetches summary metadata
- filters out weak candidates
- writes a review list for you to inspect manually

## 2. Review candidates manually

Create a JSON file such as `data/manual-review/reviewed-articles.json` with the entries you want to publish.

Each reviewed item should include:

- `title`
- `category`
- `readingMinutes`
- `summaryParagraphs` or `summaryText`
- `sourceExtract`
- `sourceUrl`
- `sourceHistoryUrl`
- `attribution`
- optional `language`
- optional `wikipediaRevisionId`
- optional `slug`

## 3. Build SQL for Postgres / Supabase

```bash
npm run reviewed:sql -- --input data/manual-review/reviewed-articles.json --output data/manual-review/reviewed-articles.sql
```

This generates `insert ... on conflict` statements for an `articles` table that matches the current spec assumptions.
