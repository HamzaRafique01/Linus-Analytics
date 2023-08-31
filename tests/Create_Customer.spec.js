const { test } = require('@playwright/test');
const fs = require('fs');
const CreateCustomer = require('../Pages/CreateCustomer');
const testData = require('../testData');


test('Create Customer', async ({ page }) => {

    const { customerName, customerStreet1, customerStreet2, customerCity, customerZipCode } = testData.customerData;

    console.log(testData.customerData)

    const Customer = new CreateCustomer(page);
    await Customer.customerNavigation()
    await Customer.clickAddCustomer();
    await page.waitForTimeout(12000);
    await Customer.enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerCity, customerZipCode);
    await Customer.clickCountry();
    await Customer.selectCountry();
    await Customer.clickstate();
    await Customer.slectestate();
    await Customer.clickonSavebtn();
})