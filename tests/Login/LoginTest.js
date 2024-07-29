import { getDriver } from '../DriverSetup.js'
import { LoginPage } from '../../pages/Login/LoginPage.js';
import generateCPF from '../../functions/generateCpf.js'
import saveScreenshot from '../../functions/screenshot.js'

let driver;
let loginPage;
let cpf = generateCPF()

describe('Login Test', function () {
  this.timeout(30000);

  before(async function () {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should open the login page', async function () {
    try {
      await loginPage.open();
      await saveScreenshot(driver, 'screenshots/Success/Login/should_open_the_login_page.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/Error/Login/should_open_the_login_page.png');
        await driver.quit();
      }

      throw error;
    }
  });

  it('must login', async function () {
    try {
      await loginPage.enterCpf(cpf);
      await saveScreenshot(driver, 'screenshots/Success/Login/must_login.png');
      await loginPage.clickLogin();
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/Error/User/RegisterStudent/must_login.png')
        await driver.quit();
      }

      throw error;
    }
  });

});