import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

let driverInstance;

export async function getDriver() {
  if (!driverInstance) {
    
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
   options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--disable-gpu');
    options.addArguments('--window-size=1920,1080');
    driverInstance = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    
   // driverInstance = await new Builder().forBrowser('chrome').build()
  }
  return driverInstance;
}