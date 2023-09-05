const { default: getText } = require('webdriverio/build/commands/element/getText');
const testData = require('../testData');
var customerName;

class CreateCustomer {

    
    constructor(page) {

        this.page = page;
        var { customerCity,customerCountry,customerState,customerName} = testData.customerData;
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
        this.searchbar = page.locator("//input[@placeholder='Search...']");
        this.searcheduser = page.locator('//h4[@aria-label="'+ customerName +'"]'); 
        this.threedotsmenu = page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]');
        this.archive = page.locator("//*[contains(text(),'Archive')]");
        this.active = page.locator("//*[contains(text(),'Active')]");
        this.restore = page.locator("//*[contains(text(),'Restore')]");
        this.delete = page.locator("//*[contains(text(),'Delete')]")
        this.confirm_delete = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-1o05m8h']");
    

    }


    async enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode) {

        await this.customernameInput.fill(customerName);
        await this.street1Input.fill(customerStreet1);
        await this.street2Input.fill(customerStreet2);
        await this.zipcodeInput.fill(customerZipCode);

        console.log("value is ------^&*((---- " + customerName)

        

    }

//    async getCustomerName(){

//     let val = await this.customernameInput.getAttribute('value');
//     console.log("value is ---------- " + val)
//     return val;

//    }

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

    async searchCustomer(customerName) {

        await this.searchbar.click();
        await this.searchbar.fill(customerName);
        
    }

    async goToSearchedUser(){

        let val = await this.searcheduser.getAttribute('aria-label');
        console.log("value is ---------- " + val)

        if(this.customerName == this.val){

            await this.searcheduser.click();
            await this.threedotsmenu.isVisible();

        }else{

            console.error("User not found")

        }
        
    }


    async archiveuser(){

        await this.threedotsmenu.click();
        await this.archive.click();
        await this.archive.isVisible();


    }


    async activeuser(){

        await this.threedotsmenu.click();
        await this.restore.click();
        await this.active.isVisible();

    }

    async deleteuser(){

        await this.threedotsmenu.click();
        await this.archive.click();
        await this.archive.isVisible();
        await this.threedotsmenu.click();
        await this.delete.click();
        await this.confirm_delete.click();
        await this.Customertext.isVisible();



    }

}

module.exports = CreateCustomer;
