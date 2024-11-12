import {test, expect} from '@playwright/test'


test('S4_TC001', async({page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toBeVisible(); 

    //Validate the sort work correctly
    await page.locator('//*[@id="header_container"]/div[2]/div/span/select').selectOption({label: 'Price (low to high)'});


    // Select all price elements
    const priceElements = await page.$$('.inventory_item_price'); 
    
    // Extract text and convert to numbers
    const prices = await Promise.all(priceElements.map(async (element) => {
    const priceText = await element.textContent();

    if (priceText) {
        return parseFloat(priceText.replace(/[^0-9.-]+/g, ''));
    } else {
        // Nếu priceText là null hoặc chuỗi rỗng, trả về giá mặc định (ví dụ: 0)
        return 0;
    }
    //return parseFloat(priceText.replace(/[^0-9.-]+/g, '')); // Clean the text to convert to a number
    }));

    // Log the list of prices
    console.log('Prices:', prices);

    // Check if the prices list is sorted
    const isSorted = prices.every((price, index) => {
    return index === 0 || price >= prices[index - 1];
    });

    console.log('Is the price list sorted?', isSorted);

    await page.close();


    });



    
test('S4_TC002', async({page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toBeVisible(); 

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //The button text changed into "Remove"  and there is number '1' on the cart
    await expect(page.locator('#remove-sauce-labs-backpack')).toContainText('Remove');
    await expect(page.locator('//*[@id="shopping_cart_container"]/a/span')).toContainText('1');
    
    //Click on the cart
    await page.locator('#shopping_cart_container').click();
    //validate pre-added item is visible
    await expect(page.locator('//*[@id="item_4_title_link"]/div')).toBeVisible();

    //Click checkout, input all required fields
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill('Vu');
    await page.locator('#last-name').fill('Tran');
    await page.locator('#postal-code').fill('1234');

    //validate the corresponding fields display input text
    await expect(page.locator('#first-name')).toHaveValue('Vu');
    await expect(page.locator('#last-name')).toHaveValue('Tran');
    await expect(page.locator('#postal-code')).toHaveValue('1234');

    //Click Continue
    await page.locator('#continue').click();
    //validate checkout page has item added earlier
    await expect(page.locator('//*[@id="item_4_title_link"]/div')).toBeVisible();

    //Click Finish
    await page.locator('#finish').click();
    //validate thank you msg: "Thank you for your order!"  and "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    await expect(page.locator('//*[@id="checkout_complete_container"]/h2')).toContainText('Thank you for your order!');
    await expect(page.locator('//*[@id="checkout_complete_container"]/div')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    
});