import { test } from '@playwright/test';
import { swagLabsLogin } from '../web-elements/automation-elements';
import { checkoutTwoItems } from '../test-actions/automation-action';



test('Check out two items in swag labs', async ({ page }) => {
    await swagLabsLogin(page);
    await checkoutTwoItems(page);
});