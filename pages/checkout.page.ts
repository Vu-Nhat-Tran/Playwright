import { Locator, Page } from "playwright";

export class CheckOut {
    readonly page: Page;
    readonly addeditem: Locator;
    readonly finishbtn: Locator
        constructor(page: Page) {
        this.page = page;
        this.addeditem = page.locator('//*[@id="item_4_title_link"]/div');
        this.finishbtn = page.locator('#finish');
                
    }

//input fistname
async getaddeditem() {
    let content = await this.addeditem.textContent();
    return content;
}

//click on the checkout button
async clickfinishbtn() {
    await this.finishbtn.click();
}


}
