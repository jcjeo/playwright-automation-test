import { Page, expect } from '@playwright/test'

export async function demoqaPage(page: Page) {
    await page.goto('https://demoqa.com/');
    await expect(page).toHaveTitle(/DEMOQA/);
}

export class DemoQaElements {
    constructor(private page: Page) { } // explicit public access
    get textBox() {
        return {
            fullName: this.page.getByRole('textbox', { name: 'Full Name' }),
            email: this.page.getByRole('textbox', { name: 'name@example.com' }),
            currentAddress: this.page.getByRole('textbox', { name: 'Current Address' }),
            permanentAddress: this.page.locator('#permanentAddress'),
            submitBtn: this.page.getByRole('button', { name: 'Submit' })
        };
    }

    // Navigation items
    get sideMenu() {
        return {
            elements: this.page.getByText('Elements'),
            practiceForm: this.page.getByText('Practice Form'),
            alertsFrameWindows: this.page.getByText('Alerts, Frame & Windows'),
        }
    }

    get elementsSideMenuItemsList() {
        return {
            textBox: this.page.getByRole('listitem').filter({ hasText: 'Text Box' }),
            checkBox: this.page.getByRole('listitem').filter({ hasText: 'Check Box' }),
            radioButton: this.page.getByRole('listitem').filter({ hasText: 'Radio Button' }),
            webTables: this.page.getByRole('listitem').filter({ hasText: 'Web Tables' }),
            buttons: this.page.getByRole('listitem').filter({ hasText: 'Buttons' }),
            links: this.page.getByRole('listitem').filter({ hasText: 'Links' }),
            brokenLinksImages: this.page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' }),
            uploadAndDownload: this.page.getByRole('listitem').filter({ hasText: 'Upload and Download' }),
            dynamicProperties: this.page.getByRole('listitem').filter({ hasText: 'Dynamic Properties' }),
        }
    }

    get checkBox() {
        return {
            toggle: this.page.getByRole('button', { name: 'Toggle' }),
            documents: this.page.locator('li:nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon'),
            result: this.page.locator('#result')
        }
    }
}

/*

// Elements
locator('div:nth-child(2) > .group-header > .header-wrapper')
getByRole('listitem').filter({ hasText: 'Text Box' })
getByRole('listitem').filter({ hasText: 'Check Box' })
getByRole('listitem').filter({ hasText: 'Radio Button' })
getByRole('listitem').filter({ hasText: 'Web Tables' })
getByRole('listitem').filter({ hasText: 'Buttons' })
getByRole('listitem').filter({ hasText: 'Links' })
getByRole('listitem').filter({ hasText: 'Broken Links - Images' })
getByRole('listitem').filter({ hasText: 'Upload and Download' })
getByRole('listitem').filter({ hasText: 'Dynamic Properties' })

// Forms
getByText('Practice Form')


// Alerts, Frame & Windows

getByRole('listitem').filter({ hasText: 'Browser Windows' })
getByRole('listitem').filter({ hasText: 'Alerts' })
getByRole('listitem').filter({ hasText: 'Frames' })
getByRole('listitem').filter({ hasText: 'Nested Frames' })
getByRole('listitem').filter({ hasText: 'Modal Dialogs' })


// Widgets
locator('div:nth-child(4) > .group-header > .header-wrapper')
getByRole('listitem').filter({ hasText: 'Accordian' })
getByRole('listitem').filter({ hasText: 'Auto Complete' })
getByRole('listitem').filter({ hasText: 'Date Picker' })
getByRole('listitem').filter({ hasText: 'Slider' })
getByRole('listitem').filter({ hasText: 'Progress Bar' })
getByRole('listitem').filter({ hasText: 'Tabs' })
getByRole('listitem').filter({ hasText: 'Tool Tips' })
getByRole('listitem').filter({ hasText: 'Menu' })
getByRole('listitem').filter({ hasText: 'Select Menu' })


*/