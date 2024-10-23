import { test, expect } from "@playwright/test"
import Blogpage from "../pages/blog.page";
test.describe('Blog', () => {

    let blogPage:Blogpage;
    test('Go to Blog Page, Count Length Of Recent Posts And Length Of Their Title', async ({ page }) => {

        //initialize page
        blogPage = new Blogpage(page);

        //go to contact page
        await blogPage.navigate();

        //Verify the length of recent post
        expect((await blogPage.rec_posts.elementHandles()).length).toEqual(5);

        //Verify the title's length of each post
        for (const element of await blogPage.rec_posts.elementHandles()) 
            expect((await element.innerText()).length).toBeGreaterThanOrEqual(10);
    })
})