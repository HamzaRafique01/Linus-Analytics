const {test} = require('@playwright/test');


import { CreateFacility } from '../Pages/CreateFacility';


test('Create Facility', async ({page}) => {
 await page.goto("./facilities");   
      
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

  }) 
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   