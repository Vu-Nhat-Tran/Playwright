import {test, expect} from '@playwright/test'
import { fail } from 'assert';

test('S3_TC001', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Checkboxes").click();
    await page.locator("//*[@id='checkboxes']/input[1]").check();
    await page.locator("//*[@id='checkboxes']/input[2]").uncheck();
     expect(await page.locator("//*[@id='checkboxes']/input[1]")).toBeChecked();
    expect(await page.locator("//*[@id='checkboxes']/input[1]").isChecked()).toBeTruthy();
    expect(await page.locator("//*[@id='checkboxes']/input[2]").isChecked()).toBeFalsy();
     
})
