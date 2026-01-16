import { expect, Page } from '@playwright/test';

export async function verifyDemoQaLists(page: Page) {
    await page.getByRole('heading', { name: 'Elements' }).isVisible();
    await page.getByRole('heading', { name: 'Forms' }).isVisible();
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).isVisible();
    await page.getByRole('heading', { name: 'Widgets' }).isVisible();
    await page.getByRole('heading', { name: 'Interactions' }).isVisible();
    await page.getByRole('heading', { name: 'Book Store Application' }).isVisible();
}