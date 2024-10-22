import {test,expect} from "@playwright/test"
test.describe('Home', () => {
    test('Open Home Page And Verify Title', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com');
        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    test('Open About Page And Verify Title', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/about/');
        //verify title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })
    test('Click Get Started Button Using CSS Selector', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com');

        //click the button
        await page.locator('#get-started').click();
        //locators doesn't need to be awaited here we use because click method return promise

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })
    test('Verify Heading Text Is Visible Using Text Selector', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com');

        //find the element
        const headingText= page.locator('text="Think different. Make different."');
        //double quotations for exact match

        //verify element is visible
        await expect(headingText).toBeVisible();
    })
})
