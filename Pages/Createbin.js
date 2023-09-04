class CreateBin{

    constructor(page){

        this.page = page;
        this.binicon = "//img[@alt='Bins-icon']";
        this.addbin = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation css-4i0zct']";
        this.binclridinput = "//input[@name='color']";
        this.binnameinput = "//input[@name='name']";
        this.maxcapacity = '';
        this.capacitythreshold = '';
        this.savebtn = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']";

    }


    async BinCreate(binclrid, name, page){
        
        await this.page.locator(this.binclridinput).fill(binclrid);
        await this.page.locator(this.binnameinput).fill(name);

    }

    async clickbinicon(page){
        await this.page.locator(this.binicon).click()
    }
    async clickaddbin(page){
        await this.page.locator(this.addbin).click()
    }

    async clickonbinsavebtn(pages){
        await this.page.locator(this.savebtn).click();
    }

}




module.exports = CreateBin;