
class CreateFacility {

    constructor(page) {
        this.page = page;

        this.facilityicon = page.locator("//img[@alt='Facilities-icon']");
        this.Addfacility = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']");
        this.customername = page.locator("//div[@id='mui-component-select-customer']");
        this.customernameselect = page.locator("//li[@data-value='63']");
        this.facilityanmeInput = page.locator("//input[@placeholder='Facility Name']");
        this.street1Input = page.locator("//input[@placeholder='Street Address 1']");
        this.street2Input = page.locator("//input[@name='streetAddress2']");
        this.cityInput = page.locator("//input[@name='city']");
        this.zipcodeInput = page.locator("//input[@placeholder='Zip Code']");
        this.country = page.locator("//div[@id='mui-component-select-country']");
        this.selectstate = page.locator("//li[@data-value='Kelly']");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        this.selectcountry = page.locator("//li[@data-value='Ralph Hubbard']");
        this.state = page.locator("//div[@id='mui-component-select-state']");
        this.weightdesignation = page.locator("//div[@id='mui-component-select-weight']");
        this.selectweight = page.locator("//li[@data-value='40 kg']");
    }
    async enterFacilityDetails(facilityName, facilityStreet1, facilityStreet2, facilityCity, facilityZipCode) {
        await this.facilityanmeInput.fill(facilityName);
        await this.street1Input.fill(facilityStreet1);
        await this.street2Input.fill(facilityStreet2);
        await this.cityInput.fill(facilityCity);
        await this.zipcodeInput.fill(facilityZipCode);
    }
    async clickFacilityIcon() {
        await this.facilityicon.click()
    }
    async clickAddFacility() {
        await this.Addfacility.click()
    }
    async clickFacilityCountry() {
        await this.country.click();
    }
    async selectFacilityCountry() {
        await this.selectcountry.click();
    }
    async clickFacilitystate() {
        await this.state.click();
    }
    async slecteFacilitystate() {
        await this.selectstate.click();
    }
    async clickFacilityCustomer() {
        await this.customername.click();
    }
    async selectFacilityCustomer() {
        await this.customernameselect.click();
    }
    async clickFacilityweight() {
        await this.weightdesignation.click();
    }
    async selectFacilityweight() {
        await this.selectweight.click();
    }
    async clickonFacilitySavebtn() {
        await this.savebtn.click();
    }
    async facilityNavigation() {
        await this.page.goto("./facilities/");
    }
}



module.exports = CreateFacility;