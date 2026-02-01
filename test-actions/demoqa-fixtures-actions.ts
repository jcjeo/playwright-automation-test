import { Page, test } from "@playwright/test";
import { DemoStudentRegistrationForm } from "../web-elements/demoqa-fixtures";

export async function fillStudentRegistrationForm(demoStudentRegistrationForm: DemoStudentRegistrationForm) {
    await demoStudentRegistrationForm.goto();
    await demoStudentRegistrationForm.firstName.fill('John');
    await demoStudentRegistrationForm.lastName.fill('Doe');
    await demoStudentRegistrationForm.email.fill('demoqa_student@yahoo.com');
}

