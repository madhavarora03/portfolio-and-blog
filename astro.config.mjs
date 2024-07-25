import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://some-site.netlify.app",
  integrations: [tailwind(), icon(), sitemap()],
});
