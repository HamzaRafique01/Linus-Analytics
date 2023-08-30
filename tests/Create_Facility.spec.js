const fs = require('fs');
import { CreateFacility } from '../Pages/CreateFacility';
const {test, Expect , chromium, page} = require('@playwright/test');

test('Create Facility', async ({}) => {

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  
  await page.goto("./facilities/");
  const Facility = new CreateFacility(page);

    // Load the data.js script in the page context
    await page.addScriptTag({ path: './constants.js' });

    // Access the data using JavaScript in the browser context
  const F_Facility_name = await page.evaluate(() => facilitydata.F_Facility_name);
  const F_street1 = await page.evaluate(() => facilitydata.F_street1);
  const F_street2 = await page.evaluate(() => facilitydata.F_street2);
  const F_City = await page.evaluate(() => facilitydata.F_City);
  const F_ZipCode = await page.evaluate(() => facilitydata.F_ZipCode);




 await Facility.clickFacilityIcon(page)
 await Facility.clickAddFacility(page);
 await Facility.createFacility(F_Facility_name, F_street1, F_street2, F_City, F_ZipCode, page);
 await Facility.clickFacilityCountry(page);
 await Facility.selectFacilityCountry(page);
 await Facility.clickFacilitystate(page);
 await Facility.slecteFacilitystate(page);
 await Facility.clickFacilityCustomer(page); 
 await Facility.selectFacilityCustomer(page);
 await Facility.clickFacilityweight(page);
 await Facility.selectFacilityweight(page);
 await Facility.clickonFacilitySavebtn(page);

  }) 
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   






























  //   const dataPath = './constants.json';
//   const rawData = fs.readFileSync(dataPath ,{encoding: 'utf-8'});
//   console.log(rawData);
//   const jsonData = JSON.parse(rawData);

// const F_Facility_name = jsonData.facility.F_Facility_name;
// const F_street1 = jsonData.facility.F_street1;
// const F_street2 = jsonData.facility.F_street2;
// const F_City = jsonData.facility.F_City;
// const F_ZipCode =constants.facility.F_ZipCode
