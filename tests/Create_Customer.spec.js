const { test } = require('@playwright/test');
const fs = require('fs');
//import { CreateCustomer } from '../Pages/CreateCustomer';
const CreateCustomer = require('../Pages/CreateCustomer');
test('Create Customer', async ({ page }) => {


    // Load the data.js script in the page context
    await page.addScriptTag({ path: './constants.js' });

    // Access the data using JavaScript in the browser context
    const C_customername = await page.evaluate(() => customerdata.C_customername);
    const C_street1 = await page.evaluate(() => customerdata.C_street1);
    const C_street2 = await page.evaluate(() => customerdata.C_street2);
    const C_City = await page.evaluate(() => customerdata.C_City);
    const C_ZipCode = await page.evaluate(() => customerdata.C_ZipCode);

    const Customer = new CreateCustomer(page);
    await Customer.clickAddCustomer();
    await page.waitForTimeout(12000);
    await Customer.CustomerCreate(C_customername, C_street1, C_street2, C_City, C_ZipCode);
    await Customer.clickCountry();
    await Customer.selectCountry();
    await Customer.clickstate();
    await Customer.slectestate();
    await Customer.clickonSavebtn();
})