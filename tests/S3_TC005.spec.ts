import {test, expect} from '@playwright/test'

test('S3_TC004', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('//*[@id="content"]/ul/li[18]/a').click();
    await page.locator('#file-upload').setInputFiles('tests/uploadfile/Rep180014b01.pdf');
    await page.locator('#file-submit').click;
    
    await expect(page.locator('//*[@id="content"]/div/h3')).toContainText('File Uploader');
    await expect(page.locator('//*[@id="uploaded-files"]')).toContainText('Rep180014b01.PDF');

})