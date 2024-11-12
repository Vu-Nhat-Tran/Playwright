import { Locator, Page } from "playwright";

export class YourInfo {
    readonly page: Page;
    readonly firstnametxt: Locator;
    readonly lastnametxt: Locator;
    readonly zipcodetxt: Locator;
    readonly continuebtn: Locator
        constructor(page: Page) {
        this.page = page;
        this.firstnametxt = page.locator('#first-name');
        this.lastnametxt = page.locator('#last-name');
        this.zipcodetxt = page.locator('#postal-code');
        this.continuebtn = page.locator('#continue');
        
    }

//input fistname
async inputinfo(firstname: string, lastname: string, zipcode: string){
    await this.firstnametxt.fill(firstname);
    await this.lastnametxt.fill(lastname);
    await this.zipcodetxt.fill(zipcode);

}

//click on the checkout button
async clickcontinuebtn() {
    await this.continuebtn.click();
}


}
