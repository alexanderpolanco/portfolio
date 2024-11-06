import { defineConfig, passthroughImageService } from "astro/config";
import { loadEnv } from "vite";

import sitemap from "@astrojs/sitemap";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  image: {
    service: passthroughImageService(),
  },

  integrations: [sitemap()],
});
