export default class BasePage {
  async open() {
    await driver.launchApp();
  }

  async openDeepLink(uri) {
    await driver.execute('mobile: deepLink', { url: uri });
  }

  async close() {
    await driver.closeApp();
  }

  async restart() {
    await driver.reset();
  }

  async waitForExist(element, timeout = 10000) {
    await element.waitForExist({ timeout });
  }

  async waitForVisible(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  }

  async waitForHidden(element, timeout = 10000) {
    await element.waitForDisplayed({ reverse: true, timeout });
  }

  async waitForNotExist(element, timeout = 10000) {
    await element.waitForExist({ reverse: true, timeout });
  }

  async click(element) {
    await this.waitForVisible(element);
    await element.click();
  }

  async tap(element) {
    await this.click(element);
  }

  async type(element, value) {
    await this.waitForVisible(element);
    await element.setValue(value);
  }

  async setValue(element, value) {
    await this.waitForVisible(element);
    await element.setValue(value);
  }

  async getText(element) {
    await this.waitForVisible(element);
    return element.getText();
  }

  async isDisplayed(element) {
    return element.isDisplayed();
  }

  async back() {
    await driver.back();
  }

  async pause(ms = 1000) {
    await driver.pause(ms);
  }

  async scrollDown() {
    await driver.execute('mobile: scroll', { direction: 'down' });
  }

  async scrollUp() {
    await driver.execute('mobile: scroll', { direction: 'up' });
  }

  async hideKeyboard() {
    try {
      await driver.hideKeyboard();
    } catch (error) {
      // Keyboard already hidden
      return error;
    }
  }
}
