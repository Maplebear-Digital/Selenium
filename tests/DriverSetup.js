import { Builder } from 'selenium-webdriver';

let driverInstance;

export async function getDriver() {
  if (!driverInstance) {
    driverInstance = await new Builder().forBrowser('chrome').build();
  }
  return driverInstance;
}