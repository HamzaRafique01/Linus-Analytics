// exports.LoginPage =
class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameInput = "//input[@name='username']";
        this.passwordInput = "//input[@name='password']";
        this.loginButton = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']";
    }

    async gotoLoginPage(page){

        await this.page.goto('https://dev.d1t5gk6ckyak9p.amplifyapp.com/login')
      
    }

    async login(username,password, page){
        
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        await page.waitForTimeout(8000);

    }
}  

module.exports = {LoginPage}