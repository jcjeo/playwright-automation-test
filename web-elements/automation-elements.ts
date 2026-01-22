import { Page, expect } from '@playwright/test'
// import login from '../appconfig.json'; // Deprecated: Credentials moved to .env


export const swagLabsLoginPage = {
    username: (page: Page) => page.locator('[data-test="username"]'),
    password: (page: Page) => page.locator('[data-test="password"]'),
    loginButton: (page: Page) => page.locator('[data-test="login-button"]'),
}

export async function swagLabsLogin(page: Page) {
    // Access credentials from environment variables (loaded from .env locally or secrets in CI)
    const username = process.env.APP_USERNAME!;
    const password = process.env.APP_PASSWORD!;

    if (!username || !password) {
        throw new Error('APP_USERNAME and APP_PASSWORD must be set in environment');
    }

    await page.goto('https://www.saucedemo.com/');
    await swagLabsLoginPage.username(page).fill(username);
    await swagLabsLoginPage.password(page).fill(password);
    await swagLabsLoginPage.loginButton(page).click();
}