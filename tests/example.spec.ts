import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/HomePage.js';
import {LoginPage} from '../pages/LoginPage.js';


test('Intervir¿ew Challenge', async ({ page }) => {

  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await page.goto('https://automationexercise.com/');
  await homePage.enterLogin();
  await loginPage.login();
  await page.pause();
  await expect(page.locator("//b[contains(text(),'Wizeline')]")).toBeVisible();
  
});
