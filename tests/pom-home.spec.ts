import { test, expect } from "@playwright/test"
import Homepage from "../pages/home.page";
test.describe('Home', () => {
    let homePage:Homepage;
    test('Open Home Page And Verify Title', async ({ page }) => {
        //initialize homepage
        homePage = new Homepage(page);

        //open url
        await homePage.navigate();

        //verify title
        await expect(homePage.page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    test('Click Get Started Button Using CSS Selector', async ({ page }) => {
        //initialize homepage
        homePage = new Homepage(page);

        //open url
        await homePage.navigate();

        //Ensure that there is no hash attached to the url
        await expect(homePage.page).not.toHaveURL(/.*#get-started/);

        //click the button
        await homePage.getStartedBtn.click();
        //locators doesn't need to be awaited here we use because click method return promise

        //verify url has #get-started
        await expect(homePage.page).toHaveURL(/.*#get-started/);
    })
    test('Verify Heading Text Is Visible Using Text Selector', async ({ page }) => {
        //initialize homepage
        homePage = new Homepage(page);

        //open url
        await homePage.navigate();

        //verify element is visible
        await expect(homePage.headingText).toBeVisible();
    })
    test('Verify That Home Navigation Link Is Enabled', async ({ page }) => {
        //initialize homepage
        homePage = new Homepage(page);

        //open url
        await homePage.navigate();

        //verify element is enabled or not
        await expect(homePage.homeLink).toBeEnabled();
    })
    test('Check The Visibility Of Search Icon', async ({ page }) => {
        //open url
        await homePage.navigate();

        //verify element is enabled or not
        await expect(homePage.searchIcon).toBeVisible();
    })
    test('Verify Specific Navigation Link And Print The All Navigation Links', async ({ page }) => {
        //open url
        await homePage.navigate();

        //verify the 4th navlink
        expect(await homePage.navLinks.nth(3).textContent()).toEqual(homePage.navTexts[3]);
    })

})
