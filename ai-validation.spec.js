import { test, expect } from '@playwright/test';
import { classifyDream } from '../utils/aiClassifier.js';

test('AI classification of dreams should match table', async ({ page }) => {
  // Example test logic - Replace with yours!
  const dream = "I saw a flying elephant";
  const classification = classifyDream(dream);
  expect(classification).toBe('fantasy');
});
