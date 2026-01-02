class PDPPage {

    get tituloPDP() { 
        return $('android=new UiSelector().descriptionContains("PIEALPHAPTO")'); 
    }

    get abaRetira() { 
        const selector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Retira"))';
        return $(`android=${selector}`);
    }

    get lojaLarCenter() { 
        return $('android=new UiSelector().descriptionContains("LAR CENTER")'); 
    }

    get botaoContinuar() { 
        return $('android=new UiSelector().description("Continuar")'); 
    }



    async aguardarCarregamento() {
        await this.tituloPDP.waitForDisplayed({ timeout: 25000 });
    }

    async selecionarMetodoRetira() {
        await this.abaRetira.waitForExist({ timeout: 25000 });
    }

    async escolherLoja() {
        await this.lojaLarCenter.waitForDisplayed({ timeout: 25000 });
        await this.lojaLarCenter.click();
    }

    async clicarContinuar() {
        await this.botaoContinuar.waitForEnabled({ timeout: 25000 });
        await this.botaoContinuar.click();
    }
}

export default new PDPPage();