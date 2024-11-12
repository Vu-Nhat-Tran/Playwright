import {test, expect} from '@playwright/test'
import { HomePage  } from '../pages/home.page'
import { LoginPage } from '../pages/login.page'
import { YourCart } from '../pages/yourcart.page'
import { YourInfo } from '../pages/yourinfo.page'
import { CheckOut } from '../pages/checkout.page'
import { Complete } from '../pages/complete.page'


test('S5_TC002', async({page}) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const yourcart = new YourCart(page);
    const yourinfo = new YourInfo(page);
    const checkout = new CheckOut(page);
    const complete = new Complete(page);
        
    await loginPage.gotoUrl();
    await loginPage.inputUsernameAndPassword('standard_user', 'secret_sauce');
    await loginPage.clickLoginBtn();

    //Validate the "Products" is visible
    const contentProduct = await homePage.getLoggerLabelContent();
    expect(contentProduct).toEqual('Products');

    //On the first item click "Add to cart"
    await homePage.clickFirstItem();

    //Step 5: Click on the cart, validate pre-added item name is visible
    await homePage.clickCartBtn();
    const nameofpreaddeditem = await yourcart.getpreaddeditem();
    expect(nameofpreaddeditem).toEqual('Sauce Labs Backpack');

    //step 6: checkout and input all infor
    await yourcart.clickCheckOutBtn();
    await yourinfo.inputinfo('Vu', 'Tran', '123456');
    await expect(yourinfo.firstnametxt).toHaveValue('Vu');
    await expect(yourinfo.lastnametxt).toHaveValue('Tran');
    await expect(yourinfo.zipcodetxt).toHaveValue('123456');
    

    //step 7: click Continue and validate checkout page has item added earlier
    await yourinfo.clickcontinuebtn();
    const nameofaddeditem = await checkout.getaddeditem();
    await expect(nameofaddeditem).toEqual(nameofpreaddeditem);

    //step 8: click Finish and validate thank you message
    await checkout.clickfinishbtn();
    const thankyoumessage = await complete.getthankyoumsg();
    expect(thankyoumessage).toEqual('Thank you for your order!');
    
})