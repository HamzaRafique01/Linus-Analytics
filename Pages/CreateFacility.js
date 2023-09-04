const testData = require('../testData');
class CreateFacility {

    constructor(page) {
        this.page = page;
        var { facilityCustomerName, facilityCity,facilityCountry,facilityState,facilityWeight } = testData.facilitydata;

        this.facilityicon = page.locator("//img[@alt='Facilities-icon']");
        this.Addfacility = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']");
        this.facilityanmeInput = page.locator("//input[@placeholder='Facility Name']");
        this.street1Input = page.locator("//input[@placeholder='Street Address 1']");
        this.street2Input = page.locator("//input[@name='streetAddress2']");
        this.zipcodeInput = page.locator("//input[@placeholder='Zip Code']");
        this.customername = page.locator("//div[@id='mui-component-select-customer']");
        this.country = page.locator("//div[@id='mui-component-select-country']");
        this.state = page.locator("//div[@id='mui-component-select-state']");
        this.city = page.locator("//div[@id='mui-component-select-city']");
        this.weight = page.locator("//div[@id='mui-component-select-weight']");
        this.selectCustomerName = page.locator('//*[contains(text(),"'+ facilityCustomerName +'")]');
        this.selectedcountry = page.locator('//li[@data-value="'+facilityCountry+'"]');
        this.selectedstate = page.locator('//li[@data-value="'+facilityState+'"]');
        this.selectedcity = page.locator('//li[@data-value="'+facilityCity+'"]');
        this.selectedWeight = page.locator('//li[@data-value="'+facilityWeight+'"]');
        this.facilityText = page.locator("//*[contains(text(),'Add Facility')]");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        }


    async enterFacilityDetails(facilityName, facilityStreet1, facilityStreet2, facilityZipCode) {
        await this.facilityanmeInput.fill(facilityName);
        await this.street1Input.fill(facilityStreet1);
        await this.street2Input.fill(facilityStreet2);
        await this.zipcodeInput.fill(facilityZipCode);
    }



    async clickAddFacility() {
        await this.Addfacility.click()
    }

    async selectFacilityCountry() {
        await this.country.click();
        await this.selectedcountry.click();
    }


    async selectFacilityCity() {
        await this.city.click();
        await this.selectedcity.click();
    }


    async verificationgranted(){
        await this.facilityText.isVisible()
    
    }

    async selecteFacilitystate() {
        await this.state.click();
        await this.selectedstate.click();
    }
    async clickFacilityCustomer() {
        await this.customername.click();
        await this.selectCustomerName.click();
    }

    async selectFacilityweight() {
        await this.weight.click();
        await this.selectedWeight.click();
    }
    async clickonFacilitySavebtn() {
        await this.savebtn.click();
    }


    async facilityNavigation() {
        await this.page.goto("./facilities/");
    }
}



module.exports = CreateFacility;