import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Caminho corrigido para o novo arquivo de setup
    setupFiles: ['projects/rss-state-store/src/test-setup.ts'],
    // Este padrão garante que apenas os testes da lib sejam executados
    include: ['projects/rss-state-store/src/lib/**/*.spec.ts'],

    // O bloco 'coverage' pertence aqui dentro
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['projects/rss-state-store/src/lib/**/*.ts'],
      exclude: [
        'projects/rss-state-store/src/lib/**/*.spec.ts',
        'projects/rss-state-store/src/lib/models/**',
        'projects/rss-state-store/src/lib/index.ts'
      ],
    },
  },
});
