import { expect } from '@playwright/test';

class DiaryPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dairy'); // Replace with actual diary URL
  }

  async getEntries() {
    // Example: get all diary entry elements
    const entries = await this.page.locator('.entry').allTextContents();
    return entries;
  }
}

export { DiaryPage };


