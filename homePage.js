import { expect } from '@playwright/test';

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/'); // Replace with your actual URL!
  }

  async getTitle() {
    return this.page.title();
  }
}

export { HomePage };

