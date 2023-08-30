class CreateScale{

    constructor(page){

        this.page = page;
        this.scaleicon = "";
        this.Addscale = "";
        this.ScaleIDInput = "//input[@placeholder='ID']";
        this.ScaleNameInput = "//input[@placeholder='Scale Name']";
        this.savebtn = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']"

    }


    async CustomerCreate(Scale_ID, Scale_Name, page){
        
        await this.page.locator(this.ScaleIDInput).fill(Scale_ID);
        await this.page.locator(this.ScaleNameInput).fill(Scale_Name);

    }

    async clickScaleIcon(page){
        await this.page.locator(this.scaleicon).click()
    }
    async clickAddScale(page){
        await this.page.locator(this.Addscale).click()
    }

    async clickonScaleSavebtn(pages){
        await this.page.locator(this.savebtn).click();
    }

}




module.exports = {CreateScale}