class CreateCustomer {


    constructor(page) {

        this.page = page;

        customericon = page.locator('//img[@alt="Customers-icon"]');
        this.Addcustomer = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel']");
        this.customernameInput = page.locator("//input[@placeholder='Customer Name']");
        this.street1Input = page.locator("//input[@placeholder='Street Address 1']");
        this.street2Input = page.locator("//input[@placeholder='Street Address 2 ']");
        this.cityInput = page.locator("//input[@placeholder='City']");
        this.zipcodeInput = page.locator("//input[@placeholder='Zip Code']");
        this.country = page.locator("//div[@id='mui-component-select-country']");
        this.statselect = page.locator("//div[@id='mui-component-select-state']");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        this.selectcountry = page.locator("//ul//li[1]");
        this.selectstate = page.locator("//ul//li[1]");

    }


    async CustomerCreate(name, street1, street2, city, zipcode) {

        await this.customernameInput.fill(name);
        await this.street1Input.fill(street1);
        await this.street2Input.fill(street2);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);


    }

    async clickCustomerIcon() {
        await this.customericon.click()

    }

    async clickAddCustomer() {
        await this.Addcustomer.click();

    }

    async clickCountry() {
        await this.country.click();

    }

    async selectCountry() {
        await this.selectcountry.click();

    }

    async clickstate() {
        await this.statselect.click();

    }

    async slectestate() {
        await this.selectstate.click();

    }

    async clickonSavebtn() {
        await this.savebtn.click();
    }

    async customerNavigation() {
        await this.page.goto("./customers/"); // Use page.goto() to navigate
    }

}

module.exports = CreateCustomer;
