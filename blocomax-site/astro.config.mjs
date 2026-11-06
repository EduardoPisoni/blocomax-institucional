// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  // Provisório: trocar pelo domínio definitivo (ex.: blocomax.com.br) quando registrado.
  site: 'https://blocomax-institucional.web.app',
  integrations: [vue()],
});
