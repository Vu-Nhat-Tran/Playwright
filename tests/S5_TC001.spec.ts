import {test, expect} from '@playwright/test'
import { HomePage  } from '../pages/home.page'
import { LoginPage } from '../pages/login.page'

test('S5_TC001', async({page}) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
        
    await loginPage.gotoUrl();
    await loginPage.inputUsernameAndPassword('locked_out_user', 'secret_sauce');
    await loginPage.clickLoginBtn();
    const contentError = await loginPage.getError();
    expect(contentError).toEqual('Epic sadface: Sorry, this user has been locked out.');

})