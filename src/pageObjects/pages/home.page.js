import BasePage from '../base/basePage.js';
import { homeElements } from '../elements/index.js';

class HomePage extends BasePage {
  get scrim() {
    return $(homeElements.scrim);
  }

  get modalTitle() {
    return $(homeElements.modalTitle);
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
