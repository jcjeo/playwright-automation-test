import type { Page, Locator } from '@playwright/test';

export class DemoStudentRegistrationForm {

    public readonly firstName: Locator;
    public readonly lastName: Locator;
    public readonly email: Locator;


    constructor(readonly page: Page) {
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.email = page.getByRole('textbox', { name: 'name@example.com' });

    }

    async goto() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async closePage() {
        await this.page.close();
    }

}

