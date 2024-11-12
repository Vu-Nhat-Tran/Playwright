import {test, expect} from '@playwright/test'

test('S3_TC006', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Dynamic Loading").click();
    await expect(page.locator('.example h3')).toContainText('Dynamically Loaded Page Elements');

    await page.getByText("Example 1: Element on page that is hidden").click();
    await expect(page.locator('.example h3')).toContainText('Dynamically Loaded Page Elements');

    await page.locator('#start').click();
    await expect(page.locator('#finish')).toContainText('Hello World!');
        

})