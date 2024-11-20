class HomePage{

    constructor(page){

        this.page = page;
        this.loginLink = page.locator("//*[contains(text(),'Signup / Login')]");

    }

    async enterLogin(){
        await this.loginLink.click();
    }

}module.exports={HomePage}
