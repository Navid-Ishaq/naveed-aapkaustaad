# Muhammad Naveed Ishaque — Educational Solutions

Cloudflare-native founder platform for `naveed.aapkaustaad.com`.

## Local development

Requirements:

- Node.js 22 or newer
- npm 11

Commands:

```text
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm run preview` runs the production Worker locally through Wrangler. `npm run deploy` must not be used until the controlled Cloudflare deployment phase is approved.

## Project safeguards

- Do not place secrets in frontend files or committed environment files.
- Do not attach a custom domain without explicit approval.
- Do not copy or refactor the AL-NOOR chatbot without a separate integration decision.
- Treat current AL-NOOR course pages as the source for current academy offerings.

See `ARCHITECTURE.md` and `PROJECT_PROGRESS.md` for decisions and controlled-phase status.
