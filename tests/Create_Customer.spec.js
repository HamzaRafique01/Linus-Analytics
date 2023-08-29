const {test, Expect , chromium, page} = require('@playwright/test');
const fs = require('fs/promises');


import { CreateCustomer } from '../Pages/CreateCustomer';
import { CreateFacility } from '../Pages/CreateFacility';

// Log Into Linus App

test('Create Customer', async ({page}) => {
  //  const browser = await chromium.launch({ headless: false });
  //  const context = await browser.newContext();
  //  const page = await context.newPage();

    // try {
        // const storageStateJSON = await fs.readFile('./loginAuth.json', 'utf-8');
        // const storageState = JSON.parse(storageStateJSON);
        // await context.addCookies(storageState.cookies);
    //   } catch (error) {
        // console.error('Error loading storage state:', error);
    //   }

     //await page.goto("https://dev.d1t5gk6ckyak9p.amplifyapp.com/customers/");
     await page.goto("./customers/");
     const Customer = new CreateCustomer(page);
    // await Customer.clickCustomerIcon(page)
     await Customer.clickAddCustomer(page);
     await page.waitForTimeout(12000);
    await Customer.CustomerCreate('Miss','10619 Roughlock Falls Rd','EnRoute','South Dakota','57754', page);
    await Customer.clickCountry(page);
    await Customer.selectCountry(page);
    await Customer.clickstate(page);
    await Customer.slectestate(page);
    await Customer.clickonSavebtn(page);
    await page.waitForTimeout(10000);
    
})
 