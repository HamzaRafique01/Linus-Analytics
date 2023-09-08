const { default: getText } = require('webdriverio/build/commands/element/getText');
const testData = require('../testData');
var fieldValue;

class CreateCustomer {

    
    constructor(page) {

        this.page = page;
        var { customerCity,customerCountry,customerState, data} = testData.customerData;
        this.customerIcon = page.locator('//img[@alt="Customers-icon"]');
        this.addCustomer = page.locator("//*[contains(text(),'Add Customer')]");
        this.customerNameInput = page.locator("//input[@placeholder='Customer Name']");
        this.street1Input = page.locator("//input[@placeholder='Street Address 1']");
        this.street2Input = page.locator("//input[@placeholder='Street Address 2 ']");
        this.zipCodeInput = page.locator("//input[@placeholder='Zip Code']");
        this.country = page.locator("//div[@id='mui-component-select-country']");
        this.state = page.locator("//div[@id='mui-component-select-state']");
        this.city = page.locator("//*[contains(text(),'City')]");
        this.saveBtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        this.selectedCountry = page.locator('//li[@data-value="'+customerCountry+'"]');
        this.selectedState = page.locator('//li[@data-value="'+customerState+'"]');
        this.selectedCity = page.locator('//li[@data-value="'+customerCity+'"]');
        this.customerText = page.locator("//*[contains(text(),'Add Customer')]");
        this.searchBox = page.locator("//input[@placeholder='Search...']");
        this.searchedUser = page.locator('//h4[@aria-label="'+ fieldValue +'"]'); 
        this.searchedDataUser = page.locator('//h4[@aria-label="'+ data +'"]'); 
        this.threeDotsMenu = page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]');
        this.archive = page.locator("//*[contains(text(),'Archive')]");
        this.active = page.locator("//*[contains(text(),'Active')]");
        this.restore = page.locator("//*[contains(text(),'Restore')]");
        this.delete = page.locator("//*[contains(text(),'Delete')]")
        this.confirmDelete = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-1o05m8h']");
    
    }


    async enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode) {

        await this.customerNameInput.fill(customerName);
        await this.street1Input.fill(customerStreet1);
        await this.street2Input.fill(customerStreet2);
        await this.zipCodeInput.fill(customerZipCode);  

    }

   async getCustomerName(){

    fieldValue = await this.customerNameInput.getAttribute('value');
    console.log("value is ---------- " + fieldValue)
    return fieldValue;

   }

    async verificationGranted(){

        if(await this.customerText.isVisible()){
            console.log("User successfully navigate to customer tab");
        }else{
            console.log("User failed to navigate");
        }
    
    }

    async userCreated(){

        if(await this.searchBox.isVisible()){
            console.log("User successfully created and navigate back to the customer tab");
        }else{
            console.log("User failed to navigate");
        }
    }

    async clickCustomerIcon() {
        
       if( await this.customerIcon.isVisible()){

        console.log("User clicked on the customer icon");
       }else{
        console.log("Customer icon is not found");
       }

    }

    async clickAddCustomer() {

        if(await this.addCustomer.isVisible()){

            console.log("Add customer button is visible......!");
            await this.addCustomer.click();
            console.log("Add customer button clicked......!");
        }else{
            console.log("Add customer button not found......!");
        }
    
    } 

    async selectCity() {

        if(await this.city.isVisible()){

            console.log("City field is visible......!");
            await this.city.click();
            await this.selectedCity.click();
            console.log("City field data filled successfully......!");

        }else{
            console.log("City field not found......!");
        }
        
    }

    async selectCountry() {

        if(await this.country.isVisible()){

            console.log("Country field is visible......!");
            await this.country.click();
            await this.selectedCountry.click();
            console.log("Country field data filled successfully......!");

        }else{
            console.log("Country field not found......!");
        }
    
    }

    async slecteState() {

        if(await this.state.isVisible()){

            console.log("State field is visible......!");
            await this.state.click();
            await this.selectedState.click();
            console.log("State field data filled successfully......!");

        }else{
            console.log("State field not found......!");
        }
    
    }

    async clickOnSaveBtn() {

        if(await this.saveBtn.isVisible()){

            console.log("Save button is visible and clickable......!");
            await this.saveBtn.click();
            console.log("Save button clicked......!");

        }else{
            console.log("Save button not found......!");
        } 
        
    }

    async customerNavigation() {
        await this.page.goto("./customers/");
    }

    async searchCustomer(data) {
        
        console.log("Field Value is ---------- " + fieldValue);
        console.log("Data Value is ---------- " + data);

        if(data == undefined && fieldValue != undefined){

            console.log("Field Value is ---------- " + fieldValue);

            if(await this.searchBox.isVisible()){
                
                console.log("Search box is found and editable......!");
                await this.searchBox.click();
                await this.searchBox.fill(fieldValue);
                console.log("Field Value is entered in the searchbox......!");

            }else{
                console.log("Searcch box is not found......!");    
            }
        }else{

            console.log("Data Value is ---------- " + data);
   
            if(await this.searchBox.isVisible()){

                console.log("Search box is found and editable......!");
                await this.searchBox.click();
                await this.searchBox.fill(data);
                console.log("Data is entered in the searchbox......!");

            }else{
                console.log("Searcch box is not found......!");    
            }
         }
       
    }

    async goToSearchedUser(data){

        console.log("Field Value is ---------- " + fieldValue);
        console.log("Data Value is ---------- " + data);
        
        if(fieldValue != undefined){

            let val = await this.searchedUser.getAttribute('aria-label');
            console.log("Val is ---------- " + val);
            console.log("Field Value is ---------- " + fieldValue);
    
    
            if(this.fieldValue == this.val){
    
                await this.searchedUser.isVisible();
                console.log("User avialable......!"); 
                await this.searchedUser.click();
                console.log("User clicked......!"); 
    
    
            }else{
                console.log("User not found");
            }

        }else{
            
            let val = await this.searchedDataUser.getAttribute('aria-label');
            console.log("Val is ---------- " + val);
            console.log("Data Value is ---------- " + data);
    
    
            if(this.data == this.val){
    
                await this.searchedDataUser.isVisible();
                console.log("User avialable......!"); 
                await this.searchedDataUser.click();
                console.log("User clicked......!"); 
    
    
            }else{
                console.log("User not found");
            }

        }

       
  

    }


    async archiveUser(){

        if(await this.threeDotsMenu.isVisible()){

            console.log("Three dots menu icon found");
            await this.threeDotsMenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.archive.isVisible(),{timeout:3000}){

                console.log("Archive button is visible");
                await this.archive.click();
                console.log("Archive button item is clicked");
                await this.archive.isVisible();// Status Check is change Active to Archive or not.
                console.log("User status changed to archive user");


            }else{
                console.log("Archive button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }

    }

    async activeUser(){
        if(await this.threeDotsMenu.isVisible()){

            console.log("Three dots menu icon found");
            await this.threeDotsMenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.restore.isVisible(),{timeout: 3000}){

                console.log("Restore button is visible");
                await this.restore.click();
                console.log("Restore button is clicked");
                await this.active.isVisible(),{timeout:3000};
                console.log("User status changed to active user");

            }else{
                console.log("Restore button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }
    }

    async deleteUser(){

        if(await this.threeDotsMenu.isVisible(),{ timeout: 5000 }){

            console.log("Three dots menu icon found");
            await this.threeDotsMenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.archive.isVisible(),{ timeout: 5000 }){

                console.log("Archive button item is visible");
                await this.archive.click();
                console.log("Archive button item is clicked");
                await this.archive.isVisible();// Status Check is change Active to Archive or not.
                console.log("User status changed to archive user");

                if(await this.threeDotsMenu.isVisible(),{ timeout: 5000 }){

                    console.log("Three dots nenu icon found");
                    await this.threeDotsMenu.click();
                    console.log("Three dots menu icon clicked");

                    if(await this.delete.isVisible(),{ timeout: 5000 }){

                        console.log("Delete button is visible");
                        await this.delete.click();
                        console.log("Delete button is clicked");

                        if(await this.confirmDelete.isVisible(),{ timeout: 5000 }){

                            console.log("Confirm delete button is visible");
                            await this.confirmDelete.click();
                            console.log("Confirm delete button is visible");

                            if(await this.searchBox.isVisible(),{ timeout: 5000 }){
                                console.log("User successfully deleted and navigate back to the customer tab");
                            }else{
                                console.log("User failed to navigate");
                            }
                        }else{
                            console.log("Confirm delete button not found");
                        }
                    }else{
                        console.log("Delete button not found");
                    }
                }else{
                    console.log("Three dots menu icon not found");
                }
            }else{
                console.log("Archive button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }

    }

}
module.exports = CreateCustomer;