import { expect, Page } from '@playwright/test';
import { DemoQaElements } from '../web-elements/demoqa-elements';

export async function verifyDemoQaLists(page: Page) {
    await page.getByRole('heading', { name: 'Elements' }).isVisible();
    await page.getByRole('heading', { name: 'Forms' }).isVisible();
    await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).isVisible();
    await page.getByRole('heading', { name: 'Widgets' }).isVisible();
    await page.getByRole('heading', { name: 'Interactions' }).isVisible();
    await page.getByRole('heading', { name: 'Book Store Application' }).isVisible();
}

export async function textBoxSection(page: Page) {
    const elements = new DemoQaElements(page);

    await elements.sideMenu.elements.click();
    await elements.elementsSideMenuItemsList.textBox.click();
    await elements.textBox.fullName.fill('TEST FULL NAME');
    await elements.textBox.email.fill('name@example.com');
    await elements.textBox.currentAddress.fill('CURRENT ADDRESS CANADA');
    await elements.textBox.permanentAddress.fill('PERMANENT ADDRESS CANADA');
    await elements.textBox.submitBtn.click();
}

export async function checkBoxSection(page: Page) {
    const elements = new DemoQaElements(page);

    await elements.sideMenu.elements.click();
    await elements.elementsSideMenuItemsList.checkBox.click();
    await elements.checkBox.toggle.click();
    await elements.checkBox.documents.click();
    await expect(elements.checkBox.result).toBeVisible();
}



