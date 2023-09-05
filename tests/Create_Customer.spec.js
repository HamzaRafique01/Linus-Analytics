const { test } = require('@playwright/test');
const fs = require('fs');
const CreateCustomer = require('../Pages/CreateCustomer');
const testData = require('../testData');

test.describe('Customers All functionality', ()=> {

    test('Create Customer', async ({ page }) => {

        var { customerName, customerStreet1, customerStreet2, customerCity,customerCountry,customerState, customerZipCode } = testData.customerData;
    
        console.log(testData.customerData)
    
        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await Customer.verificationgranted();
    
        await Customer.clickaddcustomer();
        await page.waitForTimeout(3000);
        await Customer.enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode);
        await Customer.getCustomerName();
        await Customer.selectcountry(customerCountry);
        await Customer.slectestate(customerState);
        await Customer.selectcity(customerCity);
        await Customer.clickonsavebtn();
        await Customer.verificationgranted();
        await page.waitForTimeout(5000);
    })

    test('Archive Customer', async({ page }) => {

     

        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await page.waitForTimeout(3000);
        await Customer.searchCustomer();
        await page.waitForTimeout(3000);
        await Customer.goToSearchedUser()
        await page.waitForTimeout(3000);
        await Customer.archiveuser();
        await page.waitForTimeout(3000);
        await Customer.activeuser();
        await page.waitForTimeout(3000);
        await Customer.deleteuser();
        await page.waitForTimeout(3000);

    })

})

