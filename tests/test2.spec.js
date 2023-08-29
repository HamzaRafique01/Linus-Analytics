import { expect, test } from "@playwright/test";




// Customer Create
test('Create Customer', async ({page}) => {
    
    
    const Customer = new CustomerCreate(page);
    await Customer.clickCustomerIcon(page)
    await page.pause();
    await Customer.clickAddCustomer(page);
    // await page.waitForTimeout(3000);
    await Customer.CustomerCreate('Miss','10619 Roughlock Falls Rd','EnRoute','South Dakota','57754', page);
    await Customer.clickCountry(page);
    await Customer.selectCountry(page);
    await Customer.clickstate(page);
    await Customer.slectestate(page);
    await Customer.clickonSavebtn(page);
    await page.pause();
    // await page.waitForTimeout(10000);
    
});