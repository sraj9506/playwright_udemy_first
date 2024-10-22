import { test, expect } from "@playwright/test"
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

        //Ensure that there is no hash attached to the url
        await expect(page).not.toHaveURL(/.*#get-started/);

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
        const headingText = page.locator('text="Think different. Make different."');
        //double quotations for exact match

        //verify element is visible
        await expect(headingText).toBeVisible();
    })
    test('Verify That Home Navigation Link Is Enabled', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com');

        //find the element
        const homeLink = page.locator('#zak-primary-menu :text-is("Home")');
        /* Matches the most inner element which contains exact specified string */

        /* Matches all the elements which contains specified substring */

        //page.locator('#zak-primary-menu:has-text("Home")'); 

        /* Matches the most inner element which contains specified substring  */

        //page.locator('#zak-primary-menu :text("Home")');

        /* Matches all the elements which contains exact specified string  */

        //page.locator('#zak-primary-menu >> text("Home")');

        //verify element is enabled or not
        await expect(homeLink).toBeEnabled();
    })
    test('Check The Visibility Of Search Icon', async ({ page }) => {
        //open url
        await page.goto("https://practice.sdetunicorns.com");

        //find the element
        const searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]//*[@class="zak-header-search__toggle"]//*[@class="zak-icon zakra-icon--magnifying-glass"]');

        //verify element is enabled or not
        await expect(searchIcon).toBeVisible();
    })
    test('Verify Specific Navigation Link And Print The All Navigation Links', async ({ page }) => {
        //link names which will verified further
        const navTexts=["Home","About","Shop","Blog","Contact","My Account"]

        //open url
        await page.goto("https://practice.sdetunicorns.com");

        //find the navlinks
        const navLinks = page.locator('#zak-primary-menu li[id*="menu"]');

        //verify the 4th navlink
        expect(await navLinks.nth(3).textContent()).toEqual(navTexts[3]);

        //print the links
        for (const element of await navLinks.elementHandles()) {
            console.log(await element.textContent());
        }
    })
    test('Access Contact Page, Fill The Form And Verification Of Success Message', async ({ page }) => {

        //input data
        const input=["Virat","virat18@gmail.com","1234567890","Testing Message"];

        //success message to be verfied
        const msg="Thanks for contacting us! We will be in touch with you shortly";

        //go to contact page
        await page.goto("https://practice.sdetunicorns.com/contact/");

        //access the form elements
        const frmElems=page.locator('#evf-form-277 label[for*="field_"], #evf-form-277 [id*="submit"]');

        //fill the form
        for (let index = 0; index < (await frmElems.elementHandles()).length - 1; index++) {
            await frmElems.nth(index).fill(input[index]);
        }

        //submit the form
        await frmElems.last().click();

        //get alert message
        const alert=page.locator('[role="alert"]');
        
        //verify the message
        expect((await alert.allInnerTexts()).toString().trim()).toEqual(msg);

    }) 
    test('Go to Blog Page, Count Length Of Recent Posts And Length Of Their Title', async ({ page }) => {
        
        //go to contact page
        await page.goto("https://practice.sdetunicorns.com/blog/");

        //Access the recent posts block
        const rec_post=page.locator("#recent-posts-3 li");

        //Verify the length of recent post
        expect((await rec_post.elementHandles()).length).toEqual(5);

        //Verify the title's length of each post
        for (const element of await rec_post.elementHandles()) {
            expect((await element.innerText()).length).toBeGreaterThanOrEqual(10);
        }
    })
      
})
