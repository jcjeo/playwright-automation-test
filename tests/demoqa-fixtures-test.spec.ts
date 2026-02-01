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

test('Fill student registration form', async ({ demoStudentRegistrationForm }) => {
    await fillStudentRegistrationForm(demoStudentRegistrationForm);
    await demoStudentRegistrationForm.closePage();
});
