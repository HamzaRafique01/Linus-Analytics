//const fs = require('fs');
const { test } = require('@playwright/test');
const testData = require('../testData');
const CreateFacility = require('../Pages/CreateFacility');

test('Create Facility', async ({ page }) => {

  const { facilityName, facilityStreet1, facilityStreet2, facilityCity, facilityZipCode } = testData.facilitydata;

  console.log(testData.facilitydata)

  const Facility = new CreateFacility(page);
  await Facility.facilityNavigation()
  // await Facility.clickFacilityIcon() 
  await Facility.clickAddFacility();
  await Facility.clickFacilityCustomer();
  await Facility.selectFacilityCustomer();
  await Facility.enterFacilityDetails(facilityName, facilityStreet1, facilityStreet2, facilityCity, facilityZipCode);
  await Facility.clickFacilityCountry();
  await Facility.selectFacilityCountry();
  await Facility.clickFacilitystate();
  await Facility.slecteFacilitystate();
  await Facility.clickFacilityweight();
  await Facility.selectFacilityweight();
  await Facility.clickonFacilitySavebtn();

})