const { test } = require('@playwright/test');
const fs = require('fs');
const CreateCustomer = require('../Pages/CreateCustomer');
const testData = require('../testData');

test.describe.skip('Customers All functionality', ()=> {

    test('Create Customer', async ({ page }) => {

        var { customerName, customerStreet1, customerStreet2, customerCity,customerCountry,customerState, customerZipCode } = testData.customerData;
    
        console.log(testData.customerData)
    
        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await page.waitForTimeout(3000);
        await Customer.verificationGranted();
        await Customer.clickAddCustomer();
        await page.waitForTimeout(3000);
        await Customer.enterCustomerDetails(customerName, customerStreet1, customerStreet2, customerZipCode);
        await Customer.getCustomerName();
        await Customer.selectCountry(customerCountry);
        await Customer.slecteState(customerState);
        await Customer.selectCity(customerCity);
        await Customer.clickOnSaveBtn();
        await Customer.userCreated();
        await page.waitForTimeout(5000);
    })

    test.skip('Archive Customer', async({ page }) => {

        var {data} = testData.customerData;

        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await page.waitForTimeout(3000);
        await Customer.searchCustomer(data);
        await page.waitForTimeout(3000);
        await Customer.goToSearchedUser()
        await page.waitForTimeout(3000);
        await Customer.archiveUser();
        await page.waitForTimeout(3000);

    })


    test.skip('Restore Customer', async({ page }) => {

        var {data} = testData.customerData;

        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await page.waitForTimeout(3000);
        await Customer.searchCustomer(data);
        await page.waitForTimeout(3000);
        await Customer.goToSearchedUser()
        await page.waitForTimeout(3000);
        await Customer.activeUser();
        await page.waitForTimeout(3000);
        
    })


    test('Delete Customer', async({ page }) => {

        var {data} = testData.customerData;

        const Customer = new CreateCustomer(page);
        await Customer.customerNavigation();
        await page.waitForTimeout(3000);
        await Customer.searchCustomer(data);
        await page.waitForTimeout(3000);
        await Customer.goToSearchedUser()
        await page.waitForTimeout(3000);
        await Customer.deleteUser();
        await page.waitForTimeout(3000);

        
    })

})

