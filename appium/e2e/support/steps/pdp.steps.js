import { Given, When, Then } from '@wdio/cucumber-framework';
import PDPPage from '../pages/pdp.page.js';

Given(/^que eu estou na PDP$/, async () => {
    // Esse método usa o SKU para confirmar que a tela abriu
    await PDPPage.aguardarCarregamento();
});

When(/^toda a pagina carregar$/, async () => {
    expect(await PDPPage.tituloPDP.isDisplayed()).toBe(true);
});

When(/^descer até o metodo de entrega$/, async () => {
    await PDPPage.selecionarMetodoRetira();
});

When(/^selecionar uma opçao$/, async () => {
    // Clica na loja 
    await PDPPage.escolherLoja();
});

When(/^clicar em continuar$/, async () => {
    // Clica no botão continuar após ele ficar habilitado
    await PDPPage.clicarContinuar();
});

Then(/^o produto é Adicionando ao carrinho$/, async () => {
});