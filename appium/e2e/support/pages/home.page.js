class HomePage {

    get scrimBackground() { return $('~Scrim'); }
    get tituloModalPinPad() { return $('~Conecte o pin pad ao Bluetooth do aparelho'); }

    async aguardarCarregamentoInicial() {
        await this.scrimBackground.waitForExist({ timeout: 20000 });
    }

    async validarModalVisivel() {
        await this.tituloModalPinPad.waitForDisplayed({ timeout: 10000 });
    }

    async fecharModalComBotaoVoltar() {

        await driver.back();

        await this.tituloModalPinPad.waitForExist({ reverse: true, timeout: 5000 });
    }

    async verificarModalInexistente() {
        await expect(this.tituloModalPinPad).not.toExist();
    }
}

export default new HomePage();