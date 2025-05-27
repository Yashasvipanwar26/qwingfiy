export class SummaryPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');
  }

  async getStats() {
    const text = await this.page.locator('body').innerText();
    console.log("🧾 Full Page Text:\n" + text);

    // Normalize the text to make matching more reliable
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, ' ').trim();
    const normalizedText = normalize(text);

    return {
      goodDreams: this.extractStat(text, 'Good Dreams'),
      badDreams: this.extractStat(text, 'Bad Dreams'),
      totalDreams: this.extractStat(text, 'Total Dreams'),
      recurringDreams: this.extractStat(text, 'Recurring Dreams'),
      hasFlying: normalizedText.includes('flying over mountains'),
      hasMaze: normalizedText.includes('lost in maze'),
    };
  }

  extractStat(text, label) {
    const regex = new RegExp(`${label}\\s*:?\\s*(\\d+)`, 'i');
    const match = text.match(regex);
    return match ? parseInt(match[1]) : 0;
  }
}




