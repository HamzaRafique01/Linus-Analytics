const testData = require('../testData');
class CreateScale {

    constructor(page) {

        this.page = page;
        this.scaleIcon = page.locator("//img[@alt='Scales-icon']");
        this.addScale = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']");
        this.scaleIdInput = page.locator("//input[@placeholder='ID']");
        this.scaleNameInput = page.locator("//input[@placeholder='Scale Name']");
        this.scaleText = page.locator("//*[contains(text(),'Add Scales')]");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");

    }


    async ScaleCreate(scaleId, scaleName) {

        await this.scaleIdInput.fill(scaleId);
        await this.scaleNameInput.fill(scaleName);

    }


    async verificationgranted(){
        await this.scaleText.isVisible()
    
    }

    async clickScaleIcon() {
        await this.scaleicon.click()
    }
    async clickAddScale() {
        await this.addScale.click()
    }

    async clickonScaleSavebtn() {
        await this.savebtn.click();
    }

    async scaleNavigation() {
        await this.page.goto("./scales");
    }

}

module.exports = CreateScale;