const testData = require('../testData');
class CreateCustomer {

   
    constructor(page) {

        this.page = page;
        var { customerCity,customerCountry,customerState} = testData.customerData;
        this.customericon = page.locator('//img[@alt="Customers-icon"]');
        this.Addcustomer = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel']");
        this.customernameInput = page.locator("//input[@placeholder='Customer Name']");
        this.street1Input = page.locator("//input[@placeholder='Street Address 1']");
        this.street2Input = page.locator("//input[@placeholder='Street Address 2 ']");
        this.zipcodeInput = page.locator("//input[@placeholder='Zip Code']");
        this.country = page.locator("//div[@id='mui-component-select-country']");
        this.state = page.locator("//div[@id='mui-component-select-state']");
        this.city = page.locator("//*[contains(text(),'City')]");
        this.savebtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        this.selectedcountry = page.locator('//li[@data-value="'+customerCountry+'"]');
        this.selectedstate = page.locator('//li[@data-value="'+customerState+'"]');
        this.selectedcity = page.locator('//li[@data-value="'+customerCity+'"]');
        this.Customertext = page.locator("//*[contains(text(),'Add Customer')]");
      

    }


    async enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode) {

        await this.customernameInput.fill(customerName);
        await this.street1Input.fill(customerStreet1);
        await this.street2Input.fill(customerStreet2);
        await this.zipcodeInput.fill(customerZipCode);

    }

    async verificationgranted(){
        await this.Customertext.isVisible()
    
    }

    async clickCustomerIcon() {
        await this.customericon.click()

    }

    async clickaddcustomer() {
        await this.Addcustomer.click();

    } 

    async selectcity() {
        await this.city.click();
        await this.selectedcity.click();

    }

    async selectcountry() {
        await this.country.click();
        await this.selectedcountry.click();

    }

    async slectestate() {
        await this.state.click();
        await this.selectedstate.click();

    }

    async clickonsavebtn() {
        await this.savebtn.click();
    }

    async customerNavigation() {
        await this.page.goto("./customers/");
    }

}

module.exports = CreateCustomer;
