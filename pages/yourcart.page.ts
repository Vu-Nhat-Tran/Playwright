import { Locator, Page } from "playwright";

export class YourCart {
    readonly page: Page;
    readonly preaddeditem: Locator;
    readonly CheckOutbtn: Locator;
        constructor(page: Page) {
        this.page = page;
        this.preaddeditem = page.locator('//*[@id="item_4_title_link"]/div');
        this.CheckOutbtn = page.locator('#checkout');
        
    }

//get the name the pre added item
async getpreaddeditem() {
    let content = await this.preaddeditem.textContent();
    return content;
}


//click on the checkout button
async clickCheckOutBtn() {
    await this.CheckOutbtn.click();
}



}
