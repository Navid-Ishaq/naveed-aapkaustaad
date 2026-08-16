import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://naveed.aapkaustaad.com");
  const notes = await getCollection("fieldNotes", ({ data }) => !data.draft);
  const pages = [
    { path: "/", lastmod: "2026-08-17" },
    { path: "/contact", lastmod: "2026-08-17" },
    { path: "/field-notes", lastmod: "2026-08-17" },
    ...notes.map((note) => ({
      path: `/field-notes/${note.id}`,
      lastmod: (note.data.updatedAt ?? note.data.publishedAt).toISOString().slice(0, 10),
    })),
  ];
  const urls = pages.map(({ path, lastmod }) => [
    "  <url>",
    `    <loc>${escapeXml(new URL(path, base).href)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "  </url>",
  ].join("\n")).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
