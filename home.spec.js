import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('Verify Dream Portal Home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  expect(await homePage.getTitle()).toBe('Dream Portal');
});

