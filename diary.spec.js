import { test, expect } from '@playwright/test';

test('Validate dream diary entries', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  // Wait for the table to be visible (fixes timing issue)
  await page.waitForSelector('tbody tr');

  const rows = await page.locator('tbody tr');
  const count = await rows.count();

  console.log("Found dream entries:", count); // 🐞 Debug output

  expect(count).toBe(10); // Exactly 10 dreams expected

  for (let i = 0; i < count; i++) {
    const type = await rows.nth(i).locator('td').nth(2).innerText();
    expect(['Good', 'Bad']).toContain(type);
  }
});


