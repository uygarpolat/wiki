# Calm Wiki

A minimal Expo + React Native scaffold for a calm Wikipedia discovery app.

## Getting started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npm run ios
```

You can also run:

```bash
npm run android
npm run web
```

## Structure

- `src/app`: Expo Router screens
- `src/components`: reusable UI building blocks
- `src/constants`: colors, spacing, and type scales
- `src/data`: local mock article data
- `src/lib`: selection and mock service logic
- `src/providers`: app-level discovery, saved, and history state
- `scripts`: out-of-app article curation helpers
- `SPECS.md`: product and architecture spec

## Current state

This scaffold uses local published mock content so the app can be shaped before wiring up Supabase. The intended workflow is:

1. run scripts outside the app to fetch article candidates
2. review and approve the articles manually
3. generate SQL or import payloads for Postgres / Supabase
4. have the app read already-published entries from the backend

The app currently reflects the product direction in the spec:

- `Calm Wiki` working title
- text-only article reading
- long-form summaries
- favorites, history, and theme toggle
- menu-driven secondary navigation

The app icon and splash assets are still placeholders and should be replaced before any public release.
