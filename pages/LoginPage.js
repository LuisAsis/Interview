class LoginPage{

    constructor(page){

        this.page = page;
         this.user = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
         this.password = page.getByPlaceholder('Password')
         this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async login(){
        await this.user.fill('wl.interview@test.com');
        await this.password.fill('Test1234');
        await this.loginButton.click();



    }

}module.exports={LoginPage}