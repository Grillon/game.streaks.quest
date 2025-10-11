import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/game.streaks.quest/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
