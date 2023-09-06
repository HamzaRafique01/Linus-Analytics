const { default: getText } = require('webdriverio/build/commands/element/getText');
const testData = require('../testData');
var fieldvalue;

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
        this.searcheduser = page.locator('//h4[@aria-label="'+ fieldvalue +'"]'); 
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

    }

   async getCustomerName(){

    fieldvalue = await this.customernameInput.getAttribute('value');
    console.log("value is ---------- " + fieldvalue)
    return fieldvalue;

   }

    async verificationgranted(){

        if(await this.Customertext.isVisible()){
            console.log("User Successfully Navigate to Customer Tab");
        }else{
            console.log("User failed to navigate");
        }
    
    }

    async usercreated(){

        if(await this.searchbar.isVisible()){
            console.log("User Successfully Created and Navigate back to the Customer Tab");
        }else{
            console.log("User failed to navigate");
        }
    }

    async clickCustomerIcon() {
        
       if( await this.customericon.isVisible()){

        console.log("User Clicked on the Customer icon");
       }else{
        console.log("Customer icon is not found");
       }

    }

    async clickaddcustomer() {

        if(await this.Addcustomer.isVisible()){

            console.log("Add Customer Button is Visible......!");
            await this.Addcustomer.click();
            console.log("Add Customer Button Clicked......!");
        }else{
            console.log("Add Customer Button not found......!");
        }
    
    } 

    async selectcity() {

        if(await this.city.isVisible()){

            console.log("City Field is Visible......!");
            await this.city.click();
            await this.selectedcity.click();
            console.log("City Field data filled Successfully......!");

        }else{
            console.log("City Field not found......!");
        }
        
    }

    async selectcountry() {

        if(await this.country.isVisible()){

            console.log("Country Field is Visible......!");
            await this.country.click();
            await this.selectedcountry.click();
            console.log("Country Field data filled Successfully......!");

        }else{
            console.log("Country Field not found......!");
        }
    
    }

    async slectestate() {

        if(await this.state.isVisible()){

            console.log("State Field is Visible......!");
            await this.state.click();
            await this.selectedstate.click();
            console.log("State Field data filled Successfully......!");

        }else{
            console.log("State Field not found......!");
        }
    
    }

    async clickonsavebtn() {

        if(await this.savebtn.isVisible()){

            console.log("Save button is visible and clickable......!");
            await this.savebtn.click();
            console.log("Save button clicked......!");

        }else{
            console.log("Save Button not found......!");
        }
        
        
    }

    async customerNavigation() {
        await this.page.goto("./customers/");
    }

    async searchCustomer() {

        console.log("value is ---------- " + fieldvalue);

        if(await this.searchbar.isVisible()){

            console.log("Search Box is found and editable......!");
            await this.searchbar.click();
            await this.searchbar.fill(fieldvalue);
            console.log("Data is entered in the Searchbox......!");

        }else{
            console.log("Searcch Box is not found......!");    
        }
       
    }

    async goToSearchedUser(){

        let val = await this.searcheduser.getAttribute('aria-label');
        console.log("value is ---------- " + val);

        if(this.fieldvalue == this.val){

            await this.searcheduser.click();
            await this.threedotsmenu.isVisible();
            await this.threedotsmenu.isVisible();

        }else{
            console.log("User not found");
        }
        
    }


    async archiveuser(){

        if(await this.threedotsmenu.isVisible()){

            console.log("Three dots menu icon found");
            await this.threedotsmenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.archive.isVisible()){

                console.log("Archive button item Is Visible");
                await this.archive.click();
                console.log("Archive button item Is Clicked");
                await this.archive.isVisible();// Status Check is change Active to Archive or not.
                console.log("User status changed to Archive User");


            }else{
                console.log("Archive button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }

    }


    async activeuser(){
        if(await this.threedotsmenu.isVisible()){

            console.log("Three dots menu icon found");
            await this.threedotsmenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.restore.isVisible()){

                console.log("Restore button is Visible");
                await this.restore.click();
                console.log("Restore button is Clicked");
                await this.active.isVisible();
                console.log("User status changed to Active User");

            }else{
                console.log("Restore button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }
    }




    async deleteuser(){

        if(await this.threedotsmenu.isVisible()){

            console.log("Three dots menu icon found");
            await this.threedotsmenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.archive.isVisible()){

                console.log("Archive button item Is Visible");
                await this.archive.click();
                console.log("Archive button item Is Clicked");
                await this.archive.isVisible();// Status Check is change Active to Archive or not.
                console.log("User status changed to Archive User");

                if(await this.threedotsmenu.isVisible()){

                    console.log("Three dots nenu icon found");
                    await this.threedotsmenu.click();
                    console.log("Three dots menu icon clicked");

                    if(await this.delete.isVisible(),{ timeout: 5000 }){

                        
                        console.log("Delete button is Visible");
                        await this.delete.click();
                        console.log("Delete button is Clicked");

                        if(await this.confirm_delete.isVisible()){

                            console.log("Confirm Delete button is Visible");
                            await this.confirm_delete.click();
                            console.log("Confirm Delete button is Visible");

                            if(await this.searchbar.isVisible(),{ timeout: 5000 }){
                                console.log("User Successfully Deleted and Navigate back to the Customer Tab");
                            }else{
                                console.log("User failed to navigate");
                            }
                        }else{
                            console.log("Confirm Delete button not found");
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
