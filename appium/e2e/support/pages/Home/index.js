import BasePage from '../BasePage.js';
import elements from './elements.js';

class HomePage extends BasePage {
  get scrim() {
    return $(elements.scrim);
  }

  get modalTitle() {
    return $(elements.modalTitle);
  }

  async openApp() {
    await this.waitForExist(this.scrim, 20000);
  }

  async waitModalUp() {
    await this.waitForVisible(this.modalTitle, 10000);
  }

  async closeModal() {
    await this.back();
    await this.pause(1500);
  }

  async waitModalDown() {
    await this.waitForNotExist(this.modalTitle, 10000);
  }
}

export default new HomePage();
