import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  reporter: [['html']],
  use: {
    headless: true,
  },
});
