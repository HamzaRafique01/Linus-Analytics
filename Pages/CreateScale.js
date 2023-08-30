class CreateScale{

    constructor(page){

        this.page = page;
        this.scaleicon = "//img[@alt='Scales-icon']";
        this.Addscale = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']";
        this.ScaleIDInput = "//input[@placeholder='ID']";
        this.ScaleNameInput = "//input[@placeholder='Scale Name']";
        this.savebtn = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']";

    }


    async ScaleCreate(scaleid, name, page){
        
        await this.page.locator(this.ScaleIDInput).fill(scaleid);
        await this.page.locator(this.ScaleNameInput).fill(name);

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