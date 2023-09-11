const { test } = require('@playwright/test');
const CreateScale = require('../Pages/CreateScale');
const testData = require('../testData');
const fs = require('fs');

test.describe('Scale All functionality', ()=> {

test('Create Scale', async ({ page }) => {

  const { scaleId, scaleName  } = testData.scaleData;

  console.log(testData.scaleData)

  const scale = new CreateScale(page);
  await scale.scaleNavigation()
  await scale.verificationGranted();
  await scale.clickAddScale();
  await page.waitForTimeout(12000);
  await scale.ScaleCreate(scaleId, scaleName);
  await scale.clickOnScaleSavebtn();
  await scale.verificationGranted();

})


test('Archive Scale', async({ page }) => {


  const scale = new CreateScale(page);
  await scale.scaleNavigation();
  await page.waitForTimeout(3000);
  await scale.searchScale();
  await page.waitForTimeout(3000);
  await scale.goToSearchedScale()
  await page.waitForTimeout(3000);
  await scale.archiveScale();
  await page.waitForTimeout(3000);

})

})