const { test } = require('@playwright/test');
const fs = require('fs');
const CreateCustomer = require('../Pages/CreateCustomer');
const testData = require('../testData');


test.skip('Create Customer', async ({ page }) => {

    var { customerName, customerStreet1, customerStreet2, customerCity,customerCountry,customerState, customerZipCode } = testData.customerData;

    console.log(testData.customerData)

    const Customer = new CreateCustomer(page);
    await Customer.customerNavigation();
    await Customer.verificationgranted();

    await Customer.clickaddcustomer();
    await page.waitForTimeout(12000);
    await Customer.enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode);
    await Customer.selectcountry(customerCountry);
    await Customer.slectestate(customerState);
    await Customer.selectcity(customerCity);
    await Customer.clickonsavebtn();
    await Customer.verificationgranted();
})