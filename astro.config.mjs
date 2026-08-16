import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://naveed.aapkaustaad.com",
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
    prerenderEnvironment: "node",
  }),
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
});
