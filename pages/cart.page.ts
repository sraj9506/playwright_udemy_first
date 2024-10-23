import {Page} from '@playwright/test';
import UploadComponent from './components/upload.component';

class Cartpage{
    private page: Page;
    private rootUrl:string;

    constructor(page){
        this.page=page;
        this.rootUrl='https://practice.sdetunicorns.com/cart';
    }

    uploadComponent(){return new UploadComponent(this.page);}

    async navigate(){await this.page.goto(this.rootUrl);}
}

export default Cartpage;