import { expect, Page } from '@playwright/test';

export async function checkoutTwoItems(page: Page) {
    await page.waitForLoadState('domcontentloaded');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    await page.locator('a.shopping_cart_link').click();
    await expect(page.getByText('$29.99')).toBeVisible();
    await expect(page.getByText('$9.99')).toBeVisible();
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="cancel"]')).toBeVisible();
    await expect(page.locator('[data-test="continue"]')).toBeVisible();
    await page.locator('[data-test="firstName"]').fill('TEST CHECKOUT');
    await page.locator('[data-test="lastName"]').fill('TWO ITEMS');
    await page.locator('[data-test="postalCode"]').fill('6000');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible(); // Checkout: Overview
    await expect(page.locator('[data-test="cancel"]')).toBeVisible();
    await expect(page.locator('[data-test="payment-info-value"]')).toBeVisible();
    await expect(page.locator('[data-test="shipping-info-value"]')).toBeVisible();
    await expect(page.locator('[data-test="subtotal-label"]')).toBeVisible();
    await expect(page.locator('[data-test="tax-label"]')).toBeVisible();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
}
