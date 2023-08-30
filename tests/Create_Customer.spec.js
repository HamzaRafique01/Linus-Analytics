const {test, Expect , chromium, page} = require('@playwright/test');
const fs = require('fs');
import { CreateCustomer } from '../Pages/CreateCustomer';

test('Create Customer', async ({}) => {

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("./customers/");
  const Customer = new CreateCustomer(page);

  // Load the data.js script in the page context
  await page.addScriptTag({ path: './constants.js' });

  // Access the data using JavaScript in the browser context
  const C_customername = await page.evaluate(() => customerdata.C_customername);
  const C_street1 = await page.evaluate(() => customerdata.C_street1);
  const C_street2 = await page.evaluate(() => customerdata.C_street2);
  const C_City = await page.evaluate(() => customerdata.C_City);
  const C_ZipCode = await page.evaluate(() => customerdata.C_ZipCode);

  await Customer.clickAddCustomer(page);
  await page.waitForTimeout(12000);
  await Customer.CustomerCreate(C_customername, C_street1, C_street2, C_City, C_ZipCode, page);
  await Customer.clickCountry(page);
  await Customer.selectCountry(page);
  await Customer.clickstate(page);
  await Customer.slectestate(page);
  await Customer.clickonSavebtn(page);
})
 































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






       // const dataPath = './constants.json';
  // const rawData = fs.readFileSync(dataPath ,{encoding: 'utf-8'});
  // console.log(rawData);
  // const jsonData = JSON.parse(rawData);

  // const C_customer_name = jsonData.customer.C_customer_name;
  // const C_street1 = jsonData.customer.C_street1;
  // const C_street2 = jsonData.customer.C_street2;
  // const C_City = jsonData.customer.C_City;
  // const C_ZipCode = jsonData.customer.C_ZipCode;