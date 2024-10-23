import {Page,Locator} from '@playwright/test';

class ContactPage{
    private page: Page;
    private rootUrl:string;
    msg: string;
    alert: Locator;

    constructor(page){
        this.page=page;
        this.rootUrl='https://practice.sdetunicorns.com/contact';
        this.msg = "Thanks for contacting us! We will be in touch with you shortly";
        this.alert=page.locator('[role="alert"]');
    }

    async fillForm(data:Array<string>)
    {
        //get element
        const frmElems = this.page.locator('#evf-form-277 label[for*="field_"], #evf-form-277 [id*="submit"]');

        //fill the form
        for (let index = 0; index < (await frmElems.elementHandles()).length - 1; index++) {
            await frmElems.nth(index).fill(data[index]);
        }

        //submit the form
        await frmElems.last().click();
    }

    async navigate(){await this.page.goto(this.rootUrl);}
}

export default ContactPage;