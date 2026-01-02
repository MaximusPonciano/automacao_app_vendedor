import "dotenv/config";

export const config = {
  runner: "local",
  maxInstances: 1,

  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  logLevel: "info",


  services: [
    ['appium', {
      args: {
        address: '127.0.0.1',
        port: 4723
      },
      command: 'appium'
    }]
  ],

  framework: "cucumber",

  specs: ["./appium/e2e/specs/**/*.feature"],

  cucumberOpts: {

    import: ["./appium/e2e/support/steps/**/*.js"], 
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Android Device",
      "appium:udid": "RQ8W8045NHP",
      "appium:appPackage": "br.com.fastshop.seller.beta",
      "appium:appActivity": "br.com.fastshop.seller.MainActivity",
      "appium:noReset": true,
      "appium:autoGrantPermissions": true,
      "appium:newCommandTimeout": 180,
    },
  ],

  reporters: ["dot"],

  onPrepare: function () {
    console.log("Testes iniciando com Cucumber");
  },
  onComplete: function () {
    console.log("Testes finalizados!");
  }
};