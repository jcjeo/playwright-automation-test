import { Page, expect } from '@playwright/test'
import login from '../appconfig.json';


export const swagLabsLoginPage = {
    username: (page: Page) => page.locator('[data-test="username"]'),
    password: (page: Page) => page.locator('[data-test="password"]'),
    loginButton: (page: Page) => page.locator('[data-test="login-button"]'),
}

export async function swagLabsLogin(page: Page) {
    await page.goto('https://www.saucedemo.com/');
    await swagLabsLoginPage.username(page).fill(login.username);
    await swagLabsLoginPage.password(page).fill(login.password);
    await swagLabsLoginPage.loginButton(page).click();
}