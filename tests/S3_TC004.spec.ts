import {test, expect} from '@playwright/test'

test('S3_TC004', async({page}) => {
    //step 1
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/");
    await expect(page.locator('//*[@id="wrapper"]/div[1]/div[1]/div/div/div/div[2]/h1')).toContainText('Frames And Windows');

    //step 2 3
    await page.locator('#iFrame').click();
    await page.frameLocator('//*[@id="post-2632"]/div[2]/div/div/div[3]/p/iframe').locator('#s').fill('Playwright')
    
    //step 4
    
    await page.frameLocator('//*[@id="post-2632"]/div[2]/div/div/div[3]/p/iframe').locator('//*[@id="subheader"]/div/div/div[1]/form/button').click();
    await expect(page.frameLocator('//*[@id="post-2632"]/div[2]/div/div/div[3]/p/iframe').locator('//*[@id="wrapper"]/div[1]/div[2]/div/div[2]/ol/p')).toContainText('Sorry, no posts matched your criteria.');


})

function frameLocator(arg0: string) {
    throw new Error('Function not implemented.');
}
