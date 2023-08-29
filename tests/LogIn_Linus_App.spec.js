const {test, Expect} = require('@playwright/test')

// const { expect } = require('chai')
//import {test, Expect} from require('@playwright/test')
import { LoginPage } from '../Pages/loginPage';
// import { CustomerCreate } from '../Pages/CustomerCreate';
// import { CreateFacility } from '../Pages/CreateFacility';

// Log Into Linus App
test('Log IN', async ({page}) => {

     const login = new LoginPage(page);
    // await login.gotoLoginPage(page);
    // await login.login('qalinusa@mailinator.com', 'Root@123', page);
    await page.waitForTimeout(12000);


})




































// test ('Create Facility', async ({page}) => {

//     const Facility = new CreateFacility(page);
//     await Facility.clickFacilityIcon(page)
//     await page.pause();
//     await Facility.clickAddFacility(page);
//     await page.pause();
//     await Facility.createFacility('Devigital Services','211 Banff Ave','Banff','Alberta','1362874', page);
//     await Facility.clickFacilityCountry(page);
//     await Facility.selectFacilityCountry(page);
//     await Facility.clickFacilitystate(page);
//     await Facility.slecteFacilitystate(page);
//     await Facility.clickFacilityCustomer(page);
//     await Facility.selectFacilityCustomer(page);
//     await Facility.clickFacilityweight(page);
//     await Facility.selectFacilityweight(page);
//     await Facility.clickonFacilitySavebtn(page);
//     await page.pause();
//     // await page.waitForTimeout(12000);

// })