class CreateScale {

    constructor(page) {

        this.page = page;
        this.scaleicon = page.locator("//img[@alt='Scales-icon']");
        this.Addscale = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']");
        this.ScaleIDInput = page.locator("//input[@placeholder='ID']");
        this.ScaleNameInput = page.locator("//input[@placeholder='Scale Name']");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");

    }


    async ScaleCreate(scaleID, scaleName) {

        await this.ScaleIDInput.fill(scaleID);
        await this.ScaleNameInput.fill(scaleName);

    }

    async clickScaleIcon() {
        await this.scaleicon.click()
    }
    async clickAddScale() {
        await this.Addscale.click()
    }

    async clickonScaleSavebtn() {
        await this.savebtn.click();
    }

    async scaleNavigation() {
        await this.page.goto("./scales");
    }

}

module.exports = CreateScale;