import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Base path for assets and the production build.
  server: {
    port: 3000, // The port number to run the development server on.
  },
  loader: {
    '.js': '.jsx',
  },
});
