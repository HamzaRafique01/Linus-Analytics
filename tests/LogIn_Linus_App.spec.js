const {test, Expect} = require('@playwright/test')

// const { expect } = require('chai')
//import {test, Expect} from require('@playwright/test')
import { LoginPage } from '../Pages/loginPage';
import { CustomerCreate } from '../Pages/CustomerCreate';
import { CreateFacility } from '../Pages/CreateFacility';

// Log Into Linus App

test('Create Customer', async ({page}) => {


    const login = new LoginPage(page);
    await login.gotoLoginPage(page);
    await login.login('qalinusa@mailinator.com', 'Root@123', page);
    await page.waitForTimeout(12000);

    
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
    

    const Facility = new CreateFacility(page);
    await Facility.clickFacilityIcon(page)
    await page.pause();
    await Facility.clickAddFacility(page);
    await page.pause();
    await Facility.createFacility('Devigital Services','211 Banff Ave','Banff','Alberta','1362874', page);
    await Facility.clickFacilityCountry(page);
    await Facility.selectFacilityCountry(page);
    await Facility.clickFacilitystate(page);
    await Facility.slecteFacilitystate(page);
    await Facility.clickFacilityCustomer(page);
    await Facility.selectFacilityCustomer(page);
    await Facility.clickFacilityweight(page);
    await Facility.selectFacilityweight(page);
    await Facility.clickonFacilitySavebtn(page);
    await page.pause();
    // await page.waitForTimeout(12000);
 

})

