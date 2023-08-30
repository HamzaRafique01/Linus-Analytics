const { test, Expect, chromium, page } = require('@playwright/test');
const fs = require('fs');
//const  constants = require('../constants.json')


//import { CreateCustomer } from '../Pages/CreateCustomer';
const { CreateCustomer } = require('../Pages/CreateCustomer');

test('Create Customer', async ({ page }) => {

    await page.goto("./customers/");

    const dataPath = './constants.json';
    const rawData = fs.readFileSync(dataPath, { encoding: 'utf-8' });
    console.log(rawData);
    const jsonData = JSON.parse(rawData);

    const C_customer_name = jsonData.customer.C_customer_name;
    const C_street1 = jsonData.customer.C_street1;
    const C_street2 = jsonData.customer.C_street2;
    const C_City = jsonData.customer.C_City;
    const C_ZipCode = jsonData.customer.C_ZipCode;

    const Customer = new CreateCustomer(page);
    await Customer.clickAddCustomer(page);
    await page.waitForTimeout(12000);
    await Customer.CustomerCreate(C_customer_name, C_street1, C_street2, C_City, C_ZipCode, page);
    await Customer.clickCountry(page);
    await Customer.selectCountry(page);
    await Customer.clickstate(page);
    await Customer.slectestate(page);
    await Customer.clickonSavebtn(page);

})
