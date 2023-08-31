const { test } = require('@playwright/test');
const CreateScale = require('../Pages/CreateScale');
const testData = require('../testData');

test('Create Scale', async ({ page }) => {


  const { scaleID, scaleName } = testData.scaleData;

  console.log(testData.scaleData)

  const scale = new CreateScale(page);
  await scale.scaleNavigation()
  await scale.clickAddScale();
  await page.waitForTimeout(12000);
  await scale.ScaleCreate(scaleID, scaleName);
  await scale.clickonScaleSavebtn();
});
