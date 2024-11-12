import {test, expect} from '@playwright/test'

test('S3_TC002', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Drag and Drop").click();
    await expect(page.locator('.example h3')).toContainText('Drag and Drop')

    const source = page.locator('//*[@id="column-a"]');
    const target = page.locator('//*[@id="column-b"]');
    await source.dragTo(target);

    await expect(page.locator('//*[@id="column-a"]/header')).toContainText('B');
    await expect(page.locator('//*[@id="column-b"]/header')).toContainText('A');

})