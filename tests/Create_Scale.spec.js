const { test } = require('@playwright/test');
const CreateScale = require('../Pages/CreateScale');
const testData = require('../testData');
const fs = require('fs');



test('Create Scale', async ({ page }) => {


  const { scaleId, scaleName } = testData.scaleData;

  console.log(testData.scaleData)

  const scale = new CreateScale(page);
  await scale.scaleNavigation()
  await scale.verificationgranted();
  await scale.clickAddScale();
  await page.waitForTimeout(12000);
  await page.pause();
  await scale.ScaleCreate(scaleId, scaleName);
  await page.pause();
  await scale.clickonScaleSavebtn();
  await page.pause();
  await scale.verificationgranted();

});
