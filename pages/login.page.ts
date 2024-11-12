import { Locator, Page } from "playwright";

export class LoginPage {
    readonly page: Page;
    readonly usernameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    readonly Error: Locator
    constructor(page: Page) {
        this.page = page;
        this.usernameTxt = page.locator('//*[@id="user-name"]');
        this.passwordTxt = page.locator('//*[@id="password"]');
        this.loginBtn = page.locator('//*[@id="login-button"]');
        this.Error = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    //get ErrorMessage
    async getError() {
        let content = await this.Error.textContent();
        return content;
    }


    // Go to page
    async gotoUrl() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    // input username pwd
    async inputUsernameAndPassword(username: string, password: string){
            await this.usernameTxt.fill(username);
            await this.passwordTxt.fill(password);
    }

    //click on Login button
    async clickLoginBtn() {
        await this.loginBtn.click();
    }

}