import { test as setup, expect } from '@playwright/test';

//const authFile = 'playwright/.auth/user.json';

const authFile = './user.json';

setup ('authenticate', async ({ page }) => {
    //authentication steps
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //await page.waitForURL('https://www.saucedemo.com/');

    await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toBeVisible();

    await page.context().storageState({ path: authFile});

    await page.close();

});

export default authFile;