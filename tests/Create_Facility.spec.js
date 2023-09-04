const fs = require('fs');
const { test } = require('@playwright/test');
const testData = require('../testData');
const CreateFacility = require('../Pages/CreateFacility');


test.skip('Create Facility', async ({ page }) => {

  var { facilityCustomerName, facilityName, facilityStreet1, facilityStreet2, facilityCity,facilityCountry,facilityState, facilityZipCode,facilityWeight } = testData.facilitydata;

  console.log(testData.facilitydata)

  const Facility = new CreateFacility(page);
  await Facility.facilityNavigation();
  await Facility.verificationgranted();
  await Facility.clickAddFacility();
  await page.waitForTimeout(12000);
  await Facility.clickFacilityCustomer(facilityCustomerName);
  await Facility.enterFacilityDetails(facilityName, facilityStreet1, facilityStreet2, facilityZipCode);
  await Facility.selectFacilityCountry(facilityCountry);
  await Facility.selecteFacilitystate(facilityState);
  await Facility.selectFacilityCity(facilityCity);
  await Facility.selectFacilityweight(facilityWeight);
  await Facility.clickonFacilitySavebtn();
  await page.pause();
  await Facility.verificationgranted();
  

})