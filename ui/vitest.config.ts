import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.html'],
      thresholds: {
        statements: 100,
        functions: 100,
        branches: 100,
        lines: 100,
      },
    },
  },
});
