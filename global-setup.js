import {Browser, chromium, expect, page } from "@playwright/test";


async function globelSetup(){

    const browser = await chromium.launch({headless :false});
    const context = await browser.newContext();
    const page = await context.newPage();


    const login = new LoginPage(page);
    await login.gotoLoginPage(page);
    await login.login('qalinusa@mailinator.com', 'Root@123', page);
    await page.waitForTimeout(12000);
    await expect(page.locator("//p[contains(text(),'Linus Analytics')]")).toBeVisible();


    // Save the state Of the Webpage = means are logged In

    await page.context().storageState({ path: "./LoginAuth.json"});


    await browser.close();
}

export default globelSetup;