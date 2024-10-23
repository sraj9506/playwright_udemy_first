import { test, expect } from "@playwright/test"
import ContactPage from "../pages/contact.page";
test.describe('Contact', () => {
    let contactPage:ContactPage;
    test('Access Contact Page, Fill The Form And Verification Of Success Message', async ({ page }) => {

        //initialize page
        contactPage = new ContactPage(page);

        //input data
        const input = ["Virat", "virat18@gmail.com", "1234567890", "Testing Message"];

        //go to contact page
        await contactPage.navigate();

        //form fill up
        await contactPage.fillForm(input);

        //verify the message
        expect((await contactPage.alert.allInnerTexts()).toString().trim()).toEqual(contactPage.msg);

    })
})
