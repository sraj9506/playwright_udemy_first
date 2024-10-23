import {Page,Locator} from '@playwright/test';
class UploadComponent{
    private page: Page;
    submitBtn: Locator;
    msgBlock: Locator;
    msg: string;

    constructor(page){
        this.page=page;
        this.msgBlock=this.page.locator('#wfu_messageblock_header_1_1');
        this.msg='uploaded successfully';
    }

    async uploadfile(filePath){
        await this.page.setInputFiles('#upfile_1', filePath);
        this.page.locator('#upload_1').click();     
    }
    
}
export default UploadComponent;