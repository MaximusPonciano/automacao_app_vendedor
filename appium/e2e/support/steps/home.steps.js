import { Given, When, Then } from '@wdio/cucumber-framework';

Given('que eu abro o aplicativo', async () => {
    await $('~Scrim').waitForExist({ timeout: 20000 });
});

When('o modal da Home sobe', async () => {
    const tituloModal = await $('~Conecte o pin pad ao Bluetooth do aparelho');
    await tituloModal.waitForDisplayed({ timeout: 10000 });
});

When('eu clico fora do modal', async () => {

    await driver.back();
    
    await driver.pause(1500); 
});

Then('o modal deve descer', async () => {
    const tituloModal = await $('~Conecte o pin pad ao Bluetooth do aparelho');


    await tituloModal.waitForExist({ 
        reverse: true, 
        timeout: 10000 
    });

    await expect(tituloModal).not.toExist();
});