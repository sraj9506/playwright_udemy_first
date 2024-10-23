import {Page,Locator} from '@playwright/test';

class Blogpage{
    private page: Page;
    private rootUrl:string;
    rec_posts: Locator;

    constructor(page){
        this.page=page;
        this.rootUrl='https://practice.sdetunicorns.com/blog';
        this.rec_posts=page.locator("#recent-posts-3 li");
    }

    async navigate(){await this.page.goto(this.rootUrl);}
}

export default Blogpage;