import "dotenv/config";

export const config = {
  runner: "local",
  maxInstances: 1,
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",
  logLevel: "info",
  framework: "cucumber",

  specs: ["./appium/e2e/features/**/*.feature"],

  cucumberOpts: {
    import: ["./appium/e2e/support/steps/**/*.js"],
    timeout: 60000,
  },

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.DEVICE_NAME,
      'appium:udid': process.env.DEVICE_UDID,
      'appium:app': `${process.cwd()}/app-60.apk`,
      'appium:noReset': false,
      'appium:autoGrantPermissions': true,
      'appium:chromedriverAutodownload': true
    },
  ],

  reporters: ["dot"],
};
