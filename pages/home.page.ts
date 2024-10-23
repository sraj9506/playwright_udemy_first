import { Page,Locator } from "@playwright/test"
class Homepage{

    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    navTexts: string[];
    private rootUrl: string

    constructor(page:Page){
        this.page=page;
        this.getStartedBtn=page.locator('#get-started');
        this.headingText=page.locator('text="Think different. Make different."');
        this.homeLink = page.locator('#zak-primary-menu :text-is("Home")');
        this.searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]//*[@class="zak-header-search__toggle"]//*[@class="zak-icon zakra-icon--magnifying-glass"]');
        this.navLinks = page.locator('#zak-primary-menu li[id*="menu"]');
        this.navTexts = ["Home", "About", "Shop", "Blog", "Contact", "My Account"]
        this.rootUrl='https://practice.sdetunicorns.com';
    }

    async navigate(){
        await this.page.goto(this.rootUrl);
    }

}

export default Homepage;