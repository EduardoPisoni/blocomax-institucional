// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  // Provisório: trocar pelo domínio definitivo (ex.: blocomax.com.br) quando registrado.
  site: 'https://blocomax-site.web.app',
  integrations: [vue()],
});
