import 'dotenv/config';

export const config = {
  runner: 'local',
  maxInstances: 1,
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',
  logLevel: 'info',
  framework: 'cucumber',

  specs: ['./src/features/**/*.feature'],

  cucumberOpts: {
    import: ['./src/features/step-definitions/**/*.js'],
    timeout: 60000,
  },

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.DEVICE_NAME,
      'appium:udid': process.env.DEVICE_UDID,
      'appium:app': `${process.cwd()}/app-60.apk`,
      'appium:appPackage': `br.com.fastshop.seller.${process.env.ENVIRONMENT}`,
      'appium:noReset': true,
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 180,
    },
  ],

  reporters: ['dot'],
};
