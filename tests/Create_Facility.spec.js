const {test} = require('@playwright/test');
const constants = require('../constants.json')
const fs = require('fs');


import { CreateFacility } from '../Pages/CreateFacility';


test('Create Facility', async ({page}) => {


  await page.goto("./facilities");   
  const Facility = new CreateFacility(page);

  const dataPath = './constants.json';
  const rawData = fs.readFileSync(dataPath ,{encoding: 'utf-8'});
  console.log(rawData);
  const jsonData = JSON.parse(rawData);

const F_Facility_name = jsonData.facility.F_Facility_name;
const F_street1 = jsonData.facility.F_street1;
const F_street2 = jsonData.facility.F_street2;
const F_City = jsonData.facility.F_City;
const F_ZipCode =constants.facility.F_ZipCode


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
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   