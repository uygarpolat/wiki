# Calm Wiki

A minimalist Expo + React Native app for reading curated summaries of interesting Wikipedia articles.

## Getting started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npm start
```

You can also run:

```bash
npm run ios
npm run android
npm run web
```

## Structure

- `src/app`: Expo Router screens
- `src/components`: reusable UI building blocks
- `src/constants`: colors, spacing, and type scales
- `src/data`: local fallback article data used only in development
- `src/lib`: article loading and Supabase client logic
- `src/providers`: app-level discovery, saved, and history state
- `scripts`: out-of-app article curation helpers

## Current state

The app reads published articles from Supabase. Local mock content exists only as a development fallback.

The article workflow stays outside the mobile app:

1. choose or fetch candidate Wikipedia articles outside the app
2. review them manually
3. add approved entries to `data/manual-review/reviewed-articles.json`
4. rebuild the import SQL with `npm run reviewed:sql`
5. import the cumulative reviewed set with `npm run db:import-reviewed`

Summary rules for curated entries:

- define the subject clearly at the start
- explain only the concepts needed for comprehension
- avoid phrases like "the article says" or other meta commentary
- keep shortened titles descriptive and non-cryptic
- reject entries that still feel thin after clarification

The current MVP includes:

- `Calm Wiki` working title
- text-only article reading
- curated 2-minute summaries
- favorites, history, and theme toggle
- menu-driven secondary navigation

The app icon and splash assets are still placeholders and should be replaced before any public release.
