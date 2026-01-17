import { test } from '@playwright/test';
import { demoqaPage } from '../web-elements/demoqa-elements';
import { verifyDemoQaLists, textBoxSection, checkBoxSection, radioButtonSection, webTablesSection } from '../test-actions/demoqa-actions';

test('Verify the items in DemoQA Page', async ({ page }) => {
    await demoqaPage(page);
    await verifyDemoQaLists(page);
});

test('Fill out the form in the Text Box Section', async ({ page }) => {
    await demoqaPage(page);
    await textBoxSection(page);
});

test('Check the documents folder on the Check Box Section', async ({ page }) => {
    await demoqaPage(page);
    await checkBoxSection(page);
});

test('Select the impressive option on the Radio Button Section', async ({ page }) => {
    await demoqaPage(page);
    await radioButtonSection(page);
});

test('Add a new row on the Web Tables Section', async ({ page }) => {
    await demoqaPage(page);
    await webTablesSection(page);
});