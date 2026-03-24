# Calm Wiki Spec

Status: draft  
Last updated: March 23, 2026

## 1. Go / No-Go Verdict

This idea is still a go.

It is possible to build and ship a commercial mobile app around Wikipedia content, but only if we treat store-review readiness, trademark discipline, attribution, and server-side content handling as first-class product constraints rather than cleanup work for later.

This spec now assumes:

- The working product title is `Calm Wiki`.
- App Store and Play Store compatibility are the top priority.
- Commercial viability matters from the beginning.
- v1 is text-only.
- v1 uses precomputed AI summaries stored in Postgres instead of generating a new summary live for every user request.
- Article discovery and curation happen outside the mobile app through scripts or operator tooling.
- The app experience should feel calm, minimalist, and non-bloated.

## 2. Product Summary

Build `Calm Wiki`, a React Native mobile app for iOS and Android that presents one random-but-interesting Wikipedia article at a time in a quiet reading interface. The user opens the app, receives a long-form AI-generated summary of a carefully selected Wikipedia article, and can save, share, or open the original source article.

The product should feel like:

- a calm pocket reading app
- a thoughtful Wikipedia companion
- a discovery product, not a noisy content feed

The product should not feel like:

- a thin wrapper around random Wikipedia API output
- a trivia app
- a clickbait news feed
- a generic AI summary demo

## 3. Product Direction For V1

Recommended v1 decisions:

- Use React Native with Expo, TypeScript, and Expo Router.
- Use Supabase and Postgres for the remote content store.
- Keep favorites, history, and theme preference in local device storage.
- Launch in English only.
- Launch the app as free.
- Assume future monetization comes from restrained, non-intrusive ads rather than a paid-upfront download.
- Keep the app text-only for v1. No article images.
- Do not offer topic filters in v1.
- Do not use fully raw random article selection.
- Precompute roughly 100 high-quality article summaries before launch.
- Serve only reviewed, published articles to the app.
- Keep LLM calls on the backend only.
- Keep article discovery, screening, and approval outside the app in a separate script-driven workflow.
- Use a calm, editorial UI with one main article on screen.
- Use a drawer / hamburger menu for secondary destinations.
- Keep the summary tone close to Wikipedia itself: factual, direct, and compressed rather than story-led or reflective.

## 4. Hard Product Constraints

These are not optional:

- The app must be able to pass App Store and Play Store review.
- The app must be able to support monetization later without a rewrite.
- The app must preserve Wikipedia attribution and source access.
- The app must not imply Wikimedia or Wikipedia endorsement.
- The app must avoid relying on APIs or libraries already heading into deprecation.

## 5. Commercial And Legal Viability

### Overall verdict

This is not an immediate copyright or licensing no-go.

Wikipedia text is broadly reusable, including commercially, but the implementation has to respect attribution, share-alike obligations, and trademark boundaries.

### What makes the idea viable

- Wikipedia text is largely available under `CC BY-SA 4.0`.
- Wikimedia explicitly publishes developer app guidelines.
- A text-only app avoids the hardest media-rights problem for v1.
- AI summaries can be generated from Wikipedia source text as long as we treat them conservatively as adapted content and preserve attribution.

### What requires care

- attribution and links back to the original article and history/authors
- labeling summaries as AI-generated adaptations
- trademark-safe naming and branding
- not bundling the product in a way that becomes a thin branded wrapper with little value
- being careful with any paid-upfront model because CC-licensed content and app-store DRM can create extra legal ambiguity

### Monetization recommendation

Commercial viability exists, and the v1 assumption should now be a free app with restrained ads later rather than a paid-upfront launch.

Recommendation:

- Build the app so it can monetize.
- Do not design the product around intrusive ad placements.
- Plan for calm, non-intrusive ads after launch rather than loud banners or interstitials.
- Treat a modest paid-upfront launch as higher-risk than ad-supported or sponsorship-based monetization.
- Keep the first public launch free unless the licensing and packaging posture becomes much clearer later.

Reasoning:

- intrusive ads would fight the calm product feel
- a paid-upfront app using primarily CC-licensed source material is more legally nuanced because of DRM and redistribution questions
- store-review odds are better when the value proposition is obviously broader than "pay to read Wikipedia"

Inference from the official policies:

- This project is commercially viable.
- A commercial launch is safer if the real product value comes from curation, summary quality, UX, and selection logic, not from locking up Wikipedia text itself.

## 6. Naming And Trademark Strategy

This is one of the most sensitive parts of the project.

### Research-based conclusion

Wikimedia's developer app guidance allows some descriptive use of `Wikipedia`, but using `Wikipedia` as the first word in the app title requires a trademark license.

At the same time, Apple App Review guideline `4.1(c)` says developers should not use another developer's protected third-party material such as product names or brands in a way that can create confusion or copycat risk.

### Recommendation

For the safest launch path:

- do not make `Wikipedia` the first word of the app title
- do not use the Wikipedia puzzle-globe logo
- do not make the official store title depend on the Wikipedia wordmark at launch
- use `Wikipedia` prominently in the subtitle, description, screenshots, keywords, and in-app explanatory copy instead

### Best-practice naming pattern

Recommended structure:

- app title: unique brand name
- app subtitle / description: clearly states that the app surfaces and summarizes Wikipedia articles

### Higher-risk alternative

Using a title like `Brand: Wikipedia Summaries` may be acceptable from the Wikimedia side if `Wikipedia` is not first, but it likely increases App Review scrutiny on iOS.

### Spec decision

For v1, the working title is `Calm Wiki`.

Important note:

- this spec accepts `Calm Wiki` as the current product name
- the legal or platform sensitivity around the word `Wiki` itself should be reviewed later
- until that review happens, the app should still avoid any Wikimedia logos or endorsement signals

## 7. Product Goals

Primary goals:

- deliver one satisfying article at a time
- make the reading experience calming and unintimidating
- preserve Wikipedia as the trusted source
- provide enough differentiated product value to clear store-review "minimum functionality" concerns
- keep operating costs predictable

Secondary goals:

- create a foundation for later topic filters
- prepare for later growth of the article library
- keep the stack simple enough for a first shipped app

## 8. Non-Goals For V1

Keep these out of the first release:

- live generation of a brand-new summary for every request
- topic filters
- user accounts
- cloud sync
- comments or social features
- article images
- multilingual launch
- custom authoring by users
- infinite scrolling feed behavior

## 9. Core User Experience

### Main flow

1. User opens the app.
2. App loads one published article from the reviewed library.
3. User sees:
   - article title
   - subtle source label indicating Wikipedia
   - estimated read time
   - long-form AI summary
4. User can:
   - open the original article
   - get another article
   - save to favorites
   - share the article

### Home screen requirements

The landing screen should contain the article itself.

It should not contain:

- a one-line "hook"
- a separate "why this is interesting" sentence
- bullet-point takeaways
- visual clutter or feed-like chrome

### Action layout

Actions should use idiomatic icon-led controls rather than plain text links placed in a row.

Recommended action set:

- next article
- open source article
- save / favorite
- share

Recommended layout:

- compact bottom action bar or anchored footer action cluster
- icon plus short label where needed for clarity

Share guidance:

- the share action may include the full AI-generated summary
- shared text should also include the original article URL and revision-history URL for safer attribution

### Navigation

Use a hamburger menu / drawer for secondary destinations:

- favorites
- history
- light / dark mode toggle
- about
- attribution
- privacy

## 10. Visual Design Direction

The product's visual identity should be:

- minimalist
- relaxing
- editorial
- quiet
- clean without being sterile

Design principles:

- generous spacing
- strong typography
- low visual noise
- restrained motion
- obvious but unobtrusive controls
- no busy cards, badges, or dashboards

Because the product value is calm reading, every screen should feel lighter than a typical content app.

Current UI polish notes to retain:

- the home-screen title should remain more prominent than the drawer trigger
- the title may use a restrained cursive or italic treatment, but should stay readable and not become ornate
- the title should feel centered relative to the reading card below it
- there should be clear breathing room between the title area, the reading card, and the action row
- when the user requests another article, the screen should scroll back to the top after the new article loads
- Favorites, History, About, and Attribution still need a later copy and content pass

## 11. Summary Generation Requirements

### Summary shape

The summary should be the main event.

Recommended target:

- roughly `500-700` words
- around a `2-minute` read
- paragraph-based only
- no bullets
- no numbered takeaways

### Summary tone

The summary should be:

- objective
- accurate
- clear
- matter-of-fact
- close in tone to Wikipedia prose

The summary should not be:

- overhyped
- overly casual
- clickbait
- dumbed down
- padded with filler
- reflective about the reader's feelings
- self-aware about the app
- written like a narrative essay when an encyclopedic explanation would be clearer

### Writing rules for the LLM

- use only supplied source material and metadata
- do not invent facts
- begin by clearly stating what the title refers to
- explain difficult concepts clearly without flattening them
- preserve nuance where the article is uncertain or debated
- do not write a separate "hook" sentence
- write flowing prose, not listicles
- include URLs inside the text only when genuinely useful
- always keep the original article link visible elsewhere in the UI
- do not force a calm or uplifting emotional framing into the summary text

### Labeling

Every summary should be clearly labeled as AI-generated from Wikipedia source material.

### Sharing

The full summary may be shared, but the shared payload should preserve source context.

Recommended share payload:

- article title
- full AI-generated summary
- note that the text is AI-generated from Wikipedia content
- original article URL
- revision-history URL

## 12. Random But Interesting Article Strategy

The product should not rely on raw random Wikipedia output.

### V1 approach

For launch, use a reviewed article library of about `100` published entries.

This selection process should live outside the mobile app.

Selection flow:

1. Run a separate script or operator workflow to gather candidate Wikipedia pages.
2. Filter out obviously weak candidates.
3. Score the remaining candidates for broad interest.
4. Generate summaries only for shortlisted candidates.
5. Manually review and approve the best articles before they are inserted into the published database.
6. Insert approved articles into Postgres through a separate script or import step.
7. Publish a rotating pool to the app.
8. Serve semi-random selections from the published pool.

### Why this is better than live random

- faster app responses
- predictable AI cost
- easier quality control
- better store-review demonstration
- fewer bad article surprises
- less operational dependence on live Wikipedia and live LLM calls

### Interestingness criteria

Each article should be judged on:

- clarity of the source article's opening sections
- novelty and curiosity value
- broad comprehensibility for a general reader
- enough depth to support a satisfying long summary
- likelihood of producing a calm, rewarding read
- low dependence on specialist context

### Rejection criteria

Reject pages that are:

- disambiguation pages
- list pages
- date pages
- redirects
- extremely short or thin
- overly obscure without narrative payoff
- likely to produce distressing or heavy reading that fights the relaxing brand
- too dependent on tables, charts, or infobox data to summarize well

### Human review recommendation

Because the initial library is only about `100` articles, human review is worth it.

This is a major advantage for a first app:

- it improves quality
- it lowers moderation and hallucination risk
- it gives the app more editorial confidence

## 13. Data Strategy And Database Tradeoff Assessment

### Options considered

#### Option A: fully live fetch plus live summary generation

Pros:

- simplest conceptually
- infinite variety

Cons:

- slower
- more expensive over time
- unpredictable quality
- weak store-review demo because the experience can vary wildly

#### Option B: precomputed library in Postgres

Pros:

- pay once per article
- fast app responses
- stable quality
- works well with manual review
- easy to keep the mobile client simple

Cons:

- smaller content inventory at launch
- requires ingestion/backfill workflow
- requires editorial maintenance over time

#### Option C: hybrid library plus live backfill queue

Pros:

- keeps launch quality high
- allows gradual growth later
- can add new articles without changing the app model

Cons:

- more moving parts than v1 needs immediately

### Recommendation

For v1, choose Option B with a path to Option C later.

That means:

- precompute about `100` articles before launch
- store summaries and metadata in Postgres
- use an external, operator-run workflow to fetch candidates and prepare reviewed articles for insertion
- serve only published articles in the app
- add more articles later through a controlled ingestion pipeline

This is the best fit for:

- your first-app scope
- app-store review quality
- predictable AI spend
- a calm user experience

## 14. Recommended Technical Architecture

### Mobile

- React Native
- Expo
- TypeScript
- Expo Router
- AsyncStorage for local favorites, history, and theme preference

### Backend

- Supabase Postgres
- Supabase Edge Functions for content delivery and admin workflows
- optional scheduled jobs for content ingestion and refresh

### Operator tooling

- local scripts or small admin utilities run outside the mobile app
- one script to gather article candidates for human review
- one script or import step to push approved entries into Postgres

### External services

- Wikipedia / Wikimedia APIs for source content
- one LLM provider for summarization

### Backend responsibilities

- fetch source article text and metadata
- call the LLM once per accepted article
- store the generated summary and attribution metadata
- serve published articles to the app

### Mobile responsibilities

- render the reading UI
- request the next published article
- save favorites and history locally
- handle sharing and external article opening
- expose attribution, privacy, and about information

### Out-of-app workflow responsibilities

- fetch candidate Wikipedia pages
- run screening heuristics
- prepare a manual review list
- insert approved articles into Postgres

## 15. API And Source Strategy

### Wikimedia API guidance

Do not build against deprecated or soon-to-be-deprecated Wikimedia API paths.

Recommended direction:

- use the MediaWiki Action API for random candidate discovery where needed
- use current project-domain REST or page content endpoints for article data
- avoid centering the architecture on the older `api.wikimedia.org/core/v1/...` paths that are already on a deprecation track

### Request hygiene

All Wikimedia requests should send a proper `User-Agent` or `Api-User-Agent`.

### App-facing API shape

Recommended public endpoints:

`GET /v1/articles/next`

- returns one published article, chosen semi-randomly from the reviewed pool

`GET /v1/articles/:id`

- returns one published article by id

No public endpoint should generate a brand-new summary synchronously for the end user in v1.

The selection workflow should be separate from the app:

- the app consumes already-published articles
- scripts or operator tooling handle candidate retrieval and database preparation

## 16. Recommended Data Model

### Remote tables

`articles`

- `id`
- `slug`
- `source_language`
- `wikipedia_title`
- `wikipedia_url`
- `wikipedia_revision_id`
- `source_extract`
- `source_text_snapshot`
- `summary_text`
- `summary_word_count`
- `interestingness_score`
- `quality_status` (`candidate`, `reviewed`, `published`, `retired`)
- `llm_provider`
- `llm_model`
- `prompt_version`
- `attribution_text`
- `article_history_url`
- `published_at`
- `created_at`
- `updated_at`

`article_selection_events` optional later

- `id`
- `article_id`
- `selected_at`
- `surface`

`ingestion_runs` optional later

- `id`
- `started_at`
- `completed_at`
- `status`
- `notes`

### Local device storage

`favorites`

- `article_id`
- `saved_at`

`history`

- `article_id`
- `viewed_at`

`preferences`

- `theme_mode`

## 17. Store Review And Publishing Requirements

### Apple

Important current constraints as of March 22, 2026:

- Apple Developer Program membership is `USD 99/year`.
- Apple requires a Privacy Policy URL for App Store apps.
- Apple review rejects thin or misleading apps and expects complete metadata, working backend services, and adequate functionality.
- Apple has published an upcoming requirement that, beginning `April 28, 2026`, app submissions must be built with `Xcode 26` and the `iOS 26 SDK`.

Implication:

- the current Expo Go-friendly development setup is fine for prototyping
- before App Store submission, the project must be upgraded to an Expo / native toolchain that satisfies Apple's upload requirement

### Google Play

Important current constraints as of March 22, 2026:

- Google Play developer registration is `USD 25` one-time.
- Personal developer accounts created after `November 13, 2023` must complete a closed test with at least `12` opted-in testers for `14` continuous days before production access.
- Google requires privacy disclosures and enforces rules against apps with limited functionality and content.

### Product implications

To clear review, v1 must visibly include:

- a polished reading experience
- semi-random but curated discovery
- favorites
- history
- share
- source access
- attribution
- privacy information
- stable loading and error handling

The app should not ship as:

- one API call plus one screen of text
- a thin webview or Wikipedia wrapper
- a placeholder demo of an LLM

## 18. Privacy, Attribution, And Compliance Requirements

The app must include:

- clear attribution to Wikipedia
- link to the original article
- link to the article history or authors page where appropriate
- a note that summaries are AI-generated adaptations
- a non-affiliation statement if `Wikipedia` is used prominently in store metadata or in-app marketing copy
- a privacy policy
- support contact information

The app should avoid:

- unnecessary analytics SDKs in v1
- transmitting user identifiers unless clearly needed
- collecting more data than favorites, history, and basic operational logs

## 19. Monetization Strategy Recommendation

### Recommended v1 posture

Keep the architecture monetization-ready, but do not make aggressive monetization the centerpiece of the first release.

Recommended order of safety:

1. free launch
2. light, non-intrusive ads or sponsorship that do not interrupt reading
3. paid-upfront launch only after extra legal comfort around licensing and store packaging

### Why intrusive ads are a bad fit

- they hurt the calming product identity
- they make the app look cheaper during review
- they reduce the app's editorial reading feel

### Recommended ad format for v1

If ads are added, the safest and best-fitting format is:

- occasional standard interstitials
- preferably video interstitials when available through the interstitial slot
- shown only at natural transition points between articles

Implementation rules:

- do not use rewarded ads or rewarded interstitials in v1
- do not force users to watch a fixed 30-second slot
- do not chain multiple full-screen ads into one forced block
- do not show a full-screen ad before an article loads
- do not show a full-screen ad while the user is reading
- keep full-screen ads closeable within 15 seconds to stay on the safer side of Google Play policy
- use the ad after the user finishes an article and requests another one, not before the intended action takes effect

Suggested initial frequency:

- start with one interstitial every 5th to 7th article transition
- reduce frequency further if retention or review feedback suffers

Reasoning:

- Google Play explicitly disallows unexpected full-screen interstitials and full-screen interstitials that are not closeable after 15 seconds
- AdMob explicitly recommends placing interstitials at natural breaks and transitions
- video interstitials generally monetize better than static interstitials without requiring a reward mechanic

### Why paid-upfront is not the default recommendation

- the product depends on CC-licensed source material
- app-store packaging can raise extra questions about DRM and reuse rights
- a paid download can make the app look closer to "selling Wikipedia" unless the differentiated value is clearly strong

### Practical conclusion

This project can still be built with commercial intent, but the spec should optimize first for:

- legal clarity
- review safety
- differentiated value

Then monetize from that stronger position.

## 20. Biggest Obstacles For A First App

### Obstacle 1: store-review "minimum functionality" risk

Mitigation:

- strong UX polish
- reviewed content pool
- favorites, history, share, attribution, privacy, theme support

### Obstacle 2: trademark and naming mistakes

Mitigation:

- avoid `Wikipedia` as the first word in the title
- avoid Wikipedia logos
- prefer a branded app title plus Wikipedia-focused subtitle and description

### Obstacle 3: summary quality and hallucinations

Mitigation:

- generate from captured source text only
- keep summaries reviewed before publication
- store prompt version and source revision id

### Obstacle 4: content quality drift

Mitigation:

- publish only reviewed articles
- keep the library small at first
- add new content through a deliberate backfill workflow

### Obstacle 5: release operations

Mitigation:

- use Expo and EAS for delivery
- plan early for TestFlight and Play closed testing
- keep the backend simple and stable

## 21. Milestones

### Milestone 1: content pipeline proof of concept

- fetch candidate articles from Wikipedia
- apply rejection heuristics
- score candidates
- generate and inspect a few long-form summaries

### Milestone 2: reviewed launch library

- produce about `100` reviewed article entries
- store them in Postgres with attribution metadata
- finalize selection and publication workflow

### Milestone 3: mobile MVP

- build the calm reading screen
- implement next / save / share / source actions
- add favorites, history, theme toggle, about, attribution, privacy

### Milestone 4: store-readiness

- prepare privacy policy and support contact
- create store assets
- validate backend reliability
- run TestFlight and Play closed testing

### Milestone 5: public launch

- submit to App Store
- complete Play production requirements
- monitor crashes, retention, and content quality

## 22. Final Recommendation

The right v1 is no longer "live random Wikipedia with an on-demand summary."

The right v1 is:

- a calm text-only mobile reading app
- built with React Native, Expo, TypeScript, Expo Router, Supabase, and Postgres
- called `Calm Wiki` for now
- powered by a reviewed library of about `100` interesting Wikipedia articles
- summarized once per article on the backend
- filled through a separate operator-run curation and import workflow
- delivered through a minimalist experience with favorites, history, sharing, and source access

This version is more realistic to ship, easier to review, cheaper to operate, and safer from a licensing and product-quality perspective.

## 23. References

Official sources consulted or reflected in this spec:

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Apple Developer Program pricing and membership](https://developer.apple.com/programs/whats-included/)
- [Apple upcoming SDK minimum requirements, February 3, 2026](https://developer.apple.com/news/?id=ueeok6yw)
- [Google Play Developer Program policy](https://support.google.com/googleplay/android-developer/answer/16810878)
- [Required information to create a Play Console developer account](https://support.google.com/googleplay/android-developer/answer/13628312?hl=en)
- [Google Play personal account testing requirement](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Google Play privacy policy and user data guidance](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Google Play ads policy](https://support.google.com/googleplay/android-developer/answer/9857753)
- [Wikimedia Developer App Guidelines](https://foundation.wikimedia.org/wiki/Legal:Wikimedia_Developer_App_Guidelines)
- [Wikimedia Developer App Guidelines FAQ](https://foundation.wikimedia.org/wiki/Legal:Wikimedia_Developer_App_Guidelines/Frequently_asked_questions)
- [Wikimedia trademark policy](https://foundation.wikimedia.org/wiki/Policy:Wikimedia_Foundation_Trademark_Policy)
- [Wikipedia / Wikimedia terms summary](https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use/Summary)
- [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- [Creative Commons guidance on charging for CC-licensed works and DRM considerations](https://creativecommons.org/course/cc-cert-edu/unit-4-using-cc-licenses-and-cc-licensed-works/4-2-things-to-consider-after-cc-licensing/)
- [AdMob interstitial ad guidance](https://support.google.com/admob/answer/6066980)
- [MediaWiki Action API: Random](https://www.mediawiki.org/wiki/API:Random)
- [MediaWiki REST API policies](https://www.mediawiki.org/wiki/API:REST_API/Policies)
- [Wikimedia API portal and deprecation notices](https://api.wikimedia.org/wiki/Community/About)
