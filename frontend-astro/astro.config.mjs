import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Use GitHub Pages deployment
  site: 'https://vetocatprotocol-web.github.io',
  base: '/KARYO',
  
  integrations: [],
  
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});
