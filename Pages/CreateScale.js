const { default: getText } = require('webdriverio/build/commands/element/getText');
const testData = require('../testData');
var fieldValue;

class CreateScale {

    constructor(page) {

        this.page = page;
        var {Id} = testData.scaleData;
        this.scaleIcon = page.locator("//img[@alt='Scales-icon']");
        this.addScale = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']");
        this.scaleIdInput = page.locator("//input[@Name='ID']");
        this.scaleNameInput = page.locator("//input[@placeholder='Scale Name']");
        this.scaleText = page.locator("//*[contains(text(),'Add Scales')]");
        this.saveBtn = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");
        this.searchBox = page.locator("//input[@placeholder='Search...']");
        this.searchedScale = page.locator('//h4[@aria-label="'+ fieldValue +'"]'); 
        this.searchedDataScale = page.locator('//h4[@aria-label="'+ Id +'"]'); 
        this.threeDotsMenu = page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]');
        this.archive = page.locator("//*[contains(text(),'Archive')]");
        this.active = page.locator("//*[contains(text(),'Active')]");
        this.restore = page.locator("//*[contains(text(),'Restore')]");
        this.delete = page.locator("//*[contains(text(),'Delete')]")
        this.confirmDelete = page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-1o05m8h']");
  

    }


    async ScaleCreate(scaleId, scaleName) {

        await this.scaleIdInput.fill(scaleId);
        await this.scaleNameInput.fill(scaleName);

    }

    async getScaleName(){

        fieldValue = await this.scaleNameInput.getAttribute('value');
        console.log("value is ---------- " + fieldValue)
        return fieldValue;
    
       }


    async verificationGranted(){

        if(await this.scaleText.isVisible(),{timeout: 3000}){

            await this.scaleText.click();
            console.log("Scale successfully navigate to Scale tab");

        }else{
            console.log("Failed to navigate");
        }
    }

    async clickScaleIcon() {

        if(await this.scaleIcon.isVisible(),{timeout: 3000}){
        
            console.log("User clicked on the Scale icon");
    
            }else{
                console.log("Scale icon is not found");
            }
    }


    async clickAddScale() {

        if(await this.addScale.isVisible(),{timeout: 3000}){

            console.log("Add Scale button is visible......!");
            await this.addScale.click();
            console.log("Add Scale button clicked......!");

        }else{
            console.log("Add Scale button not found......!");
        }
    }

    async clickOnScaleSavebtn() {

        if(await this.saveBtn.isVisible(),{timeout: 3000}){

            console.log("Save button is visible and clickable......!");
            await this.saveBtn.click();
            console.log("Save button clicked......!");

        }else{
            console.log("Save button not found......!");
        } 
    }

    async scaleNavigation() {
        await this.page.goto("./scales");
    }


    async searchScale(Id){
        
        console.log("Field Value is ---------- " + fieldValue);
        console.log("ID Value is ---------- " + Id);

        if(Id == undefined && fieldValue != undefined){

            console.log("Field Value is ---------- " + fieldValue);

            if(await this.searchBox.isVisible(),{timeout: 3000}){

                console.log("Search box is found and editable......!");
                await this.searchBox.click();
                await this.searchBox.fill(fieldValue);
                console.log("Field Value is entered in the searchbox......!");

                }else{
                    console.log("Search box is not found......!");    
                }

            }else{

                console.log("ID Value is ---------- " + Id);
       
                if(await this.searchBox.isVisible(),{timeout: 3000}){

                    console.log("Search box is found and editable......!");
                    await this.searchBox.click();
                    await this.searchBox.fill(Id);
                    console.log("Data is entered in the searchbox......!");
    
                }else{
                    console.log("Search box is not found......!");    
                }
             }
    }

    async goToSearchedScale(Id){

        console.log("Field Value is ---------- " + fieldValue);
        console.log("Data Value is ---------- " + Id);

        if(Id == undefined && fieldValue != undefined){

            console.log("Field Value is ---------- " + fieldValue);

            if(await this.searchBox.isVisible(),{timeout: 3000}){
                
                console.log("Search box is found and editable......!");
                await this.searchBox.click();
                await this.searchBox.fill(fieldValue);
                console.log("Field Value is entered in the searchbox......!");

            }else{
                console.log("Search box is not found......!");    
            }
        }else{

            console.log("Data Value is ---------- " + Id);
   
            if(await this.searchBox.isVisible(),{timeout: 3000}){

                console.log("Search box is found and editable......!");
                await this.searchBox.click();
                await this.searchBox.fill(Id);
                console.log("Data is entered in the searchbox......!");

            }else{
                console.log("Search box is not found......!");    
            }
         }
       
    }




    async archiveScale(){

        if(await this.threeDotsMenu.isVisible(),{timeout: 3000}){

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



    async activeScale(){

        if(await this.threeDotsMenu.isVisible(),{timeout: 3000}){

            console.log("Three dots menu icon found");
            await this.threeDotsMenu.click();
            console.log("Three dots menu icon clicked");

            if(await this.restore.isVisible(),{timeout: 3000}){

                console.log("Restore button is visible");
                await this.restore.click();
                console.log("Restore button is clicked");
                await this.active.isVisible(),{timeout:3000};
                console.log("User status changed to active scale");

            }else{
                console.log("Restore button not found in three dots menu");
            }
        }else{
            console.log("Three dots menu icon not found");
        }
    }


    async deleteScale(){

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
                                console.log("Scale successfully deleted and navigate back to the Scale tab");
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

module.exports = CreateScale;