import {test, expect} from '@playwright/test'


test('S3_TC003', async({page}) => {
    //step 1
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('//*[@id="content"]/ul/li[11]/a').click();
    await expect(page.locator('//*[@id="content"]/div/h3')).toContainText('Dropdown List');
    //step 2
    await page.locator('#dropdown').selectOption({label: 'Option 2'});
    await expect(page.locator('#dropdown')).toContainText('Option 2');
    //step 3
    await page.locator('#dropdown').selectOption({index: 1});
    await expect(page.locator('#dropdown')).toContainText('Option 1');
    //step 4
    await page.locator('#dropdown').selectOption({value: '2'});
    await expect(page.locator('#dropdown')).toContainText('Option 2');



})