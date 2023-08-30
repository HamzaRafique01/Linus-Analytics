const {test, Expect , chromium, page} = require('@playwright/test');
const fs = require('fs');
//const  constants = require('../constants.json')


import { CreateScale } from '../Pages/CreateScale';


test('Create Scale', async ({page}) => {

    await page.goto("./scales/");
    const scale = new Createscale(page);
  
    const dataPath = './constants.json';
    const rawData = fs.readFileSync(dataPath ,{encoding: 'utf-8'});
    console.log(rawData);
    const jsonData = JSON.parse(rawData);
  
    const Scale_ID = jsonData.scale.Scale_ID;
    const Scale_Name = jsonData.scale.Scale_Name;
    
  
    await Customer.clickAddScale(page);
    await page.waitForTimeout(12000);
    await Customer.ScaleCreate(Scale_ID, Scale_Name, page);
    await Customer.clickonScaleSavebtn(page);
    
    
  
    
      
  })
   