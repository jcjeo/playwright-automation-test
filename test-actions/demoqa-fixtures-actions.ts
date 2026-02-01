import { Page, test } from "@playwright/test";
import { DemoStudentRegistrationForm } from "../web-elements/demoqa-fixtures";

export async function fillStudentRegistrationForm(demoStudentRegistrationForm: DemoStudentRegistrationForm) {
    await test.step('Navigate to registration form', async () => {
        await demoStudentRegistrationForm.goto();
    });

    await test.step('Fill personal details', async () => {
        await demoStudentRegistrationForm.firstName.fill('John');
        await demoStudentRegistrationForm.lastName.fill('Doe');
        await demoStudentRegistrationForm.email.fill('demoqa_student@yahoo.com');
    });
}

