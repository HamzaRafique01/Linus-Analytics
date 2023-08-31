const { test, Expect, chromium, page } = require('@playwright/test');
const fs = require('fs');
import { CreateScale } from '../Pages/CreateScale';



test.skip('Create Scale', async ({ page }) => {

  await page.goto("./scales/");
  const scale = new CreateScale(page);

  const dataPath = './constants.json';
  const rawData = fs.readFileSync(dataPath, { encoding: 'utf-8' });
  console.log(rawData);
  const jsonData = JSON.parse(rawData);

  const id = jsonData.scale.Scale_id;
  const name = jsonData.scale.Scale_Name;


  await scale.clickAddScale(page);
  await page.waitForTimeout(12000);
  await scale.ScaleCreate(id, name, page);
  await scale.clickonScaleSavebtn(page);
});
