import { test } from '@playwright/test';
import { demoqaPage } from '../web-elements/demoqa-elements';
import { verifyDemoQaLists } from '../test-actions/demoqa-actions';

test('Verify the items in DemoQA Page', async ({ page }) => {
    await demoqaPage(page);
    await verifyDemoQaLists(page);
});