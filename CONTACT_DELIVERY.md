# Contact delivery decision

The Phase 14 contact experience intentionally does not transmit visitor data. It prepares a structured brief locally and lets the visitor copy it. Secure delivery must not be enabled until the recipient mailbox and delivery configuration are explicitly approved.

## Recommended production pattern

When approved, implement a same-origin `POST /api/contact` endpoint in the Cloudflare Worker and apply all of the following controls:

- Validate a Cloudflare Turnstile token on the server. Client-side presence is not sufficient.
- Apply a Cloudflare Workers Rate Limiting binding to the endpoint.
- Accept only an explicit field allowlist, enforce length limits and reject oversized or malformed bodies.
- Keep a honeypot field and verify the expected origin/host as additional signals, not as primary protection.
- Use a Cloudflare `send_email` binding restricted to one verified `destination_address`.
- Keep all credentials and configuration in Cloudflare bindings or secrets; expose none to browser code.
- Escape or encode user-provided content before producing an email body.
- Do not record message bodies or personal details in application logs.
- Return honest success and failure states only after the delivery call has completed.

## Decisions still required

1. Approve the exact recipient mailbox for this founder platform.
2. Verify the destination address and sender domain in Cloudflare Email Routing / Email Service.
3. Approve the public contact privacy wording and retention policy.
4. Approve adding Turnstile, Rate Limiting and `send_email` bindings to the Worker configuration.
5. Test delivery, rejection, rate-limit and unavailable-service paths before enabling the submit control.

No endpoint, binding, mailbox or external provider was configured during Phase 14.
