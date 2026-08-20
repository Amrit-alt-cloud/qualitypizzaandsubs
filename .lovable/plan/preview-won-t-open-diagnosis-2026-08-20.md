# Preview won't open — diagnosis

## What I checked
- Dev server responds normally (HTTP 200 on the site root).
- TypeScript check: no errors.
- Full production build: succeeds, all pages compiled (home, menu, about, contact, sitemap).

## Conclusion
There is nothing broken in the site's code. The message "Preview has not been built yet"
comes from the Lovable preview container still starting up, not from an error in the project.

## What to do
1. Hard-refresh or reopen the preview tab — it typically clears within a minute.
2. If it persists, publish the site and view it at the live URL instead, which serves from
   the same code that just built successfully.

No file changes are required.
