import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import bun from 'astro-bun-adapter'
import htmx from 'astro-htmx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), htmx()],
  output: 'server',
  adapter: bun()
});
