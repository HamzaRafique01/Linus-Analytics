class CreateFacility{

    constructor(page){

        this.page = page;
        this.facilityicon = "//img[@alt='Facilities-icon']"
        this.Addfacility = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']"
        this.customername = "//input[@name='customer']";
        this.customernameselect = "//li[@data-value='63']";
        this.facilityanmeInput = "//input[@placeholder='Facility Name']";
        this.street1Input = "//input[@placeholder='Street Address 1']";
        this.street2Input = "//input[@name='streetAddress2']";
        this.cityInput = "//input[@name='city']";
        this.zipcodeInput = "//input[@placeholder='Zip Code']";
        this.country = "//input[@name='country']";
        this.selectstate = "//li[@data-value='Kelly']"
        this.savebtn = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']";
        this.selectcountry = "//li[@data-value='Ralph Hubbard']";
        this.state = "//input[@name='state']";
        this.weightdesignation = "//input[@name='weight']";
        this.selectweight = "//li[@data-value='40 kg']";

    }

    async createFacility(name, street1, street2, city, zipcode, page){
        
        await this.page.locator(this.facilityanmeInput).fill(name);
        await this.page.locator(this.street1Input).fill(street1);
        await this.page.locator(this.street2Input).fill(street2);
        await this.page.locator(this.cityInput).fill(city);
        await this.page.locator(this.zipcodeInput).fill(zipcode);

    }


    async clickFacilityIcon(page){
        await this.page.locator(this.facilityicon).click()
        
    }

    async clickAddFacility(page){
        await this.page.locator(this.Addfacility).click()
    
    }

    async clickFacilityCountry(page){
        await this.page.locator(this.country).click();
        
    }

    async selectFacilityCountry(page){
        await this.page.locator(this.selectcountry).click();
        
    }

    async clickFacilitystate(page){
        await this.page.locator(this.state).click();       
    }

    async slecteFacilitystate(page){
        await this.page.locator(this.selectstate).click();
       
    }

    async clickFacilityCustomer(page){
        await this.page.locator(this.customername).click();
    }

    async selectFacilityCustomer(page){
        await this.page.locator(this.customernameselect).click();
    }

    async clickonFacilitySavebtn(pages){
        await this.page.locator(this.savebtn).click();
    }


}



module.exports = {CreateFacility}