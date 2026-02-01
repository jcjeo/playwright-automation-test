import { test as base } from '@playwright/test';
import { fillStudentRegistrationForm } from '../test-actions/demoqa-fixtures-actions';
import { DemoStudentRegistrationForm } from '../web-elements/demoqa-fixtures';


type DemoQaFixtures = {
    demoStudentRegistrationForm: DemoStudentRegistrationForm;
}

const test = base.extend<DemoQaFixtures>({
    demoStudentRegistrationForm: async ({ page }, use) => {
        const demoStudentRegistrationForm = new DemoStudentRegistrationForm(page);
        await use(demoStudentRegistrationForm);
    }
});

// test.beforeEach(async ({ demoStudentRegistrationForm }) => {
//     await demoStudentRegistrationForm.goto();
// });

test('Fill student registration form', async ({ demoStudentRegistrationForm }) => {
    await test.step('Complete the Student Form', async () => {
        await fillStudentRegistrationForm(demoStudentRegistrationForm);
    });
});
test.afterEach(async ({ demoStudentRegistrationForm }) => {
    await demoStudentRegistrationForm.closePage();
});
