const fs = require('fs');
import { CreateScale } from '../Pages/CreateScale';
const {test, Expect , chromium, page} = require('@playwright/test');


test('Create Scale', async ({}) => {

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("./scales/");
  const Scale = new CreateScale(page);

    // Load the data.js script in the page context
    await page.addScriptTag({ path: './constants.js' });
    
  const Scale_id = await page.evaluate(() => scaledata.Scale_id);
  const Scale_Name = await page.evaluate(() => scaledata.Scale_Name);
    
  
    await Scale.clickAddScale(page);
    await page.waitForTimeout(12000);
    await Scale.ScaleCreate(Scale_id, Scale_Name, page);
    await Scale.clickonScaleSavebtn(page);

  })
   



























  // const dataPath = './constants.json';
  //   const rawData = fs.readFileSync(dataPath ,{encoding: 'utf-8'});
  //   console.log(rawData);
  //   const jsonData = JSON.parse(rawData);
  
  //   const id = jsonData.scale.Scale_id;
  //   const name = jsonData.scale.Scale_Name;