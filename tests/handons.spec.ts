import {test, expect} from '@playwright/test'

test('Login successfully', async({page}) => {
    await page.goto("https://practice.expandtesting.com/");
    await page.getByRole("heading").filter({hasText: "Test Login Page"}).click();
    await page.getByLabel("username").fill('practice');
    await page.getByLabel("password").fill('SuperSecretPassword!');
    await page.getByRole("button", {name: "Login"}).click();

    //await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole("alert")).toContainText("You logged into a secure area!");

})
