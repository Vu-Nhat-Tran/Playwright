import {test, expect} from '@playwright/test'
import { exec } from 'child_process';

test('S3_TC007', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.locator('#header-inner')).toContainText('Automation Testing Practice');

    await page.locator('#name').fill('Vu Tran');
    await expect(page.locator('#name')).toHaveValue('Vu Tran');
    
    await page.locator('#textarea').fill('My Da Tay');
    await expect(page.locator('#textarea')).toHaveValue('My Da Tay');

    await page.locator('#name').clear();
    await expect(page.locator('#name')).toBeEmpty();

    await page.locator('#textarea').clear();
    await expect(page.locator('#textarea')).toBeEmpty();

    })