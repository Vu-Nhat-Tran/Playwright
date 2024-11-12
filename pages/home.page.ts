import { Locator, Page } from "playwright";

export class HomePage {
    readonly page: Page;
    readonly loggedLbl: Locator;
    readonly Cart: Locator;
    readonly firsttitem: Locator
        constructor(page: Page) {
        this.page = page;
        this.loggedLbl = page.locator('//*[@id="header_container"]/div[2]/span');
        this.Cart = page.locator('#shopping_cart_container')
        this.firsttitem = page.locator('#add-to-cart-sauce-labs-backpack')
    }


//get content
    async getLoggerLabelContent() {
        let content = await this.loggedLbl.textContent();
        return content;
    }
//click on the cart
async clickCartBtn() {
    await this.Cart.click();
}

//click on 1st item
async clickFirstItem() {
    await this.firsttitem.click();
}

}
