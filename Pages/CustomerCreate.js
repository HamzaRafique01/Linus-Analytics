

class CustomerCreate{

    constructor(page){

        this.page = page;
        this.customericon = "//img[@alt='Customers-icon']";
        this.Addcustomer = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']//span[@class='MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel']";
        this.customernameInput = "//input[@placeholder='Customer Name']";
        this.street1Input = "//input[@placeholder='Street Address 1']";
        this.street2Input = "//input[@placeholder='Street Address 2 ']";
        this.cityInput = "//input[@placeholder='City']";
        this.zipcodeInput = "//input[@placeholder='Zip Code']";
        this.country = "//div[@id='mui-component-select-country']"
        this.statselect = "//div[@id='mui-component-select-state']"
        this.savebtn = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']"
        this.selectcountry = "//ul//li[1]"
        this.selectstate = "//ul//li[1]"

    }


    async CustomerCreate(name, street1, street2, city, zipcode, page){
        
        await this.page.locator(this.customernameInput).fill(name);
        await this.page.locator(this.street1Input).fill(street1);
        await this.page.locator(this.street2Input).fill(street2);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.zipcodeInput).fill(zipcode);

    }

    async clickCustomerIcon(page){
        await this.page.locator(this.customericon).click()
        
    }

    async clickAddCustomer(page){
        await this.page.locator(this.Addcustomer).click();
        
    }

    async clickCountry(page){
        await this.page.locator(this.country).click();
        
    }

    async selectCountry(page){
        await this.page.locator(this.selectcountry).click();
        
    }

    async clickstate(page){
        await this.page.locator(this.statselect).click();
       
    }

    async slectestate(page){
        await this.page.locator(this.selectstate).click();
       
    }

    async clickonSavebtn(pages){
        await this.page.locator(this.savebtn).click();
    }
}

module.exports = {CustomerCreate}
