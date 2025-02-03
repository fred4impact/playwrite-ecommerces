import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/',
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },
  reporter: [['html', { outputFolder: 'reports' }]]
});
