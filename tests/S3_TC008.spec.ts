import {test, expect} from '@playwright/test'


test('S3_TC008', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.locator('#header-inner')).toContainText('Automation Testing Practice');

      
    page.on('dialog', async dialog =>{
     expect(dialog.type()).toContain('prompt')
     expect(dialog.message()).toContain('Please enter your name:');
     expect(dialog.defaultValue()).toContain('Harry Potter');
     await dialog.accept('Vu Tran');

          })

          await page.locator('#promptBtn').click();
          await expect(page.locator('#demo')).toContainText('Hello Vu Tran! How are you today?');

          await page.waitForTimeout(5000);
 
    })