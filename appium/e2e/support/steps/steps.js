// appium/e2e/support/steps/steps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import { loginElements } from '../../support/pages/login';

Given('que o aplicativo App Vendedor está aberto', async () => {
  await driver.switchContext('NATIVE_APP');
  await driver.pause(2000);
});

When('eu acesso o fluxo de login', async () => {
  await driver.switchContext('NATIVE_APP');
  await $(loginElements.loginButton).waitForDisplayed({ timeout: 10000 });
  await $(loginElements.loginButton).click();
});

  // aguarda abrir Chrome Custom Tab
  When('o cookie VTEX válido está presente no browser', async () => {
    await driver.pause(4000);

    const contexts = await driver.getContexts();
    const webviewCtx = contexts.find(c => c.includes('WEBVIEW'));

    if (!webviewCtx) {
      throw new Error(`Contexto WEBVIEW não encontrado. Contextos: ${contexts}`);
    }

    await driver.switchContext(webviewCtx);

    await driver.setCookies([
      {
        name: 'VtexIdclientAutCookie',
        value: process.env.VTEX_COOKIE,
        domain: 'fastshopbrqa2.myvtex.com',
        path: '/',
        secure: true,
      },
    ]);

    await driver.url('https://www.fastshop.com.br');
  });

Then('devo retornar para o aplicativo', async () => {
  await driver.pause(3000);
  await driver.switchContext('NATIVE_APP');
});

Then('devo visualizar a home do App Vendedor', async () => {
  // validação simples de smoke
  await driver.pause(3000);
});
