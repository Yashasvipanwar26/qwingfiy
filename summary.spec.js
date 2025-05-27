import { test, expect } from '@playwright/test';
import { SummaryPage } from '../pages/summaryPage.js';

test('Validate summary stats', async ({ page }) => {
  const summaryPage = new SummaryPage(page);
  await summaryPage.navigate();

  const stats = await summaryPage.getStats();

  expect(stats.goodDreams).toBe(6);
  expect(stats.badDreams).toBe(4);
  expect(stats.totalDreams).toBe(10);
  expect(stats.recurringDreams).toBe(2);
  expect(stats.hasFlying).toBeTruthy();   // More tolerant match
  expect(stats.hasMaze).toBeTruthy();     // More tolerant match
});
