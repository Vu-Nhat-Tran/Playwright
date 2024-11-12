import { Locator, Page } from "playwright";

export class Complete {
    readonly page: Page;
    readonly thankyoumsg: Locator;
        constructor(page: Page) {
        this.page = page;
        this.thankyoumsg = page.locator('//*[@id="checkout_complete_container"]/h2');
                                
    }

//thank you message
async getthankyoumsg() {
    let content = await this.thankyoumsg.textContent();
    return content;
}

}
