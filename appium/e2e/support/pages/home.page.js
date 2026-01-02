class HomePage {
    // Seletores
    get scrimBackground() { return $('~Scrim'); }
    get tituloModalPinPad() { return $('~Conecte o pin pad ao Bluetooth do aparelho'); }
    get produtoNovo() { 
        const selector = 'new UiSelector().descriptionStartsWith("PIEALPHAPTO")';
        return $(`android=${selector}`);
    }


    async aguardarCarregamentoInicial() {
        try {
            await this.scrimBackground.waitForExist({ timeout: 5000 });
        } catch (error) {
            console.log("Modal não apareceu desta vez, seguindo...");
        }
    }

    async clicarForaDoModal() {

        await this.scrimBackground.waitForDisplayed({ timeout: 5000 });
        await this.scrimBackground.click();
    }

    async validarModalVisivel() {
        return await this.tituloModalPinPad.isDisplayed();
    }

    async selecionarPrimeiroProduto() {
        await this.produtoNovo.waitForDisplayed({ timeout: 10000 });
        await this.produtoNovo.click();
    }
}

export default new HomePage();