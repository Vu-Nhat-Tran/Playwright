import {test, expect} from '@playwright/test'

let page;

test.beforeEach(async({browser})=> {
    page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/");

})


test.skip('S3_TC001',  { tag: ['@regression'] }, async() => {
    //await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Checkboxes").click();
    await page.locator("//*[@id='checkboxes']/input[1]").check();
    await page.locator("//*[@id='checkboxes']/input[2]").uncheck();
    expect(await page.locator("//*[@id='checkboxes']/input[1]")).toBeChecked();
    expect(await page.locator("//*[@id='checkboxes']/input[1]").isChecked()).toBeTruthy();
    expect(await page.locator("//*[@id='checkboxes']/input[2]").isChecked()).toBeFalsy();
    
})


test('S3_TC002', { tag: ['@smoke'] }, async() => {
    //await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Drag and Drop").click();
    await expect(page.locator('.example h3')).toContainText('Drag and Drop')

    const source = page.locator('//*[@id="column-a"]');
    const target = page.locator('//*[@id="column-b"]');
    await source.dragTo(target);

    await expect(page.locator('//*[@id="column-a"]/header')).toContainText('B');
    await expect(page.locator('//*[@id="column-b"]/header')).toContainText('A');

})


test.fail('S3_TC003', async() => {
    //step 1
    //await page.goto("https://the-internet.herokuapp.com/");
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


/*
test('S3_TC004', async() => {
    //await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('//*[@id="content"]/ul/li[18]/a').click();
    await page.locator('#file-upload').setInputFiles('tests/uploadfile/Rep180014b01.pdf');
    await page.locator('#file-submit').click;
    
    await expect(page.locator('//*[@id="content"]/div/h3')).toContainText('File Uploader');
    await expect(page.locator('//*[@id="uploaded-files"]')).toContainText('Rep180014b01.PDF');

})
*/

test('S3_TC006', async() => {
    //await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText("Dynamic Loading").click();
    await expect(page.locator('.example h3')).toContainText('Dynamically Loaded Page Elements');

    await page.getByText("Example 1: Element on page that is hidden").click();
    await expect(page.locator('.example h3')).toContainText('Dynamically Loaded Page Elements');

    await page.locator('#start').click();
    await expect(page.locator('#finish')).toContainText('Hello World!');
        
})
