const { Browser, chromium, expect, Page } = require('@playwright/test');
const fs = require('fs/promises');


async function saveStorageStateToJson(storageState, path) {
    try {
      await fs.writeFile(path, JSON.stringify(storageState));
      console.log('Storage state saved to', path);
    } catch (error) {
      console.error('Error saving storage state:', error);
    }
  }

async function globalSetup() {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://dev.d1t5gk6ckyak9p.amplifyapp.com//login');

    await page.locator("//input[@name='username']").fill('qalinusa@mailinator.com');

    await page.locator("//input[@name='password']").fill('Root@123');

    await page.click("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-k2bprm']");

    await expect(page.locator('//p[contains(text(),"Linus Analytics")]')).toBeVisible({ timeout: 60000 });

  const storageState = await context.storageState();

  await saveStorageStateToJson(storageState, './loginAuth.json');

  // Save the state of the web page
  //  await page.context().storageState({ path: "./loginAuth.json" });

    await page.close();
}

export default globalSetup;
