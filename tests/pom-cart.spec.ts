import { test, expect } from "@playwright/test"
import Cartpage from "../pages/cart.page";
const path = require('path');
test.describe('Cart', () => {
    let cartpage: Cartpage;
    test('Upload file', async ({ page }) => {
        //initialize page
        cartpage = new Cartpage(page);

        //go to url
        await cartpage.navigate();

        //get the file path which need to be uploaded
        const filePath = path.join(__dirname, '../data/logo.jpg');

        //upload file
        await cartpage.uploadComponent().uploadfile(filePath);

        //submit file
        await cartpage.uploadComponent().submitBtn.click();

        //verify file uploaded or not
        await expect(cartpage.uploadComponent().msgBlock).toContainText(cartpage.uploadComponent().msg);
    })
})