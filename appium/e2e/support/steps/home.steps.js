import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pages/home.page.js';

Given(/^que eu abro o aplicativo$/, async () => {
    await HomePage.aguardarCarregamentoInicial();
});

When(/^o modal da Home sobe$/, async () => {
    await HomePage.validarModalVisivel();
});

When(/^eu clico fora do modal$/, async () => {
    await HomePage.clicarForaDoModal();
});

Then(/^o modal deve descer$/, async () => {
    await HomePage.validarModalVisivel();
});

When(/^eu seleciono o produto na home$/, async () => {
    await HomePage.selecionarPrimeiroProduto();
});