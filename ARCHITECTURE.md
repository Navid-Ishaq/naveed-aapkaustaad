# Architecture decision

## Decision

The platform uses Astro, TypeScript and the official Cloudflare adapter. It is deployed as a Cloudflare Worker with static assets served from the same application.

## Why this architecture

- Astro is well suited to founder content, case studies and future Field Notes.
- Pages can be pre-rendered for speed while interactive or server routes can run on demand.
- Client-side JavaScript can remain limited to features that genuinely require it.
- A future Education Solution Finder API can execute inside the Worker without exposing secrets.
- Cloudflare bindings can later provide protected services without changing the public content architecture.

## Rendering policy

- Public editorial pages should be pre-rendered unless request-time work is necessary.
- The Education Solution Finder should begin with deterministic client-side rules.
- Any future AI enhancement must use a server-only Worker route, schema validation, explicit consent and a deterministic fallback.
- No user submission may be reported as delivered unless a real delivery service confirms it.

## Security and privacy conventions

- Never commit `.dev.vars`, `.env` files, credentials, API keys or private identifiers.
- Use Cloudflare secrets for confidential runtime values.
- Collect the minimum information required for a visitor's request.
- Do not persist Solution Finder answers during the first implementation.
- Constrain and validate all future server inputs and outputs.

## Deployment model

- Source repository: `Navid-Ishaq/naveed-aapkaustaad`
- Canonical branch: `main`
- Worker name: `naveed-aapkaustaad`
- Preview strategy: `*.workers.dev` before custom-domain attachment
- Custom domain: `naveed.aapkaustaad.com`, attached only after explicit approval

Expected Cloudflare commands after dependencies are installed:

```text
npm ci
npm run build
npm run deploy
```

Exact Cloudflare dashboard settings will be verified again during the launch-readiness phase.
