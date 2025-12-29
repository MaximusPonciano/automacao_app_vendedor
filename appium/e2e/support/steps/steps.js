import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pages/Home/index';

Given('que eu abro o aplicativo', async () => {
  await HomePage.openApp();
});

When('o modal da Home sobe', async () => {
  await HomePage.waitModalUp();
});

When('eu clico fora do modal', async () => {
  await HomePage.closeModal();
});

Then('o modal deve descer', async () => {
  await HomePage.waitModalDown();
});
