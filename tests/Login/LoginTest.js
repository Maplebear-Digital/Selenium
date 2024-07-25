import { getDriver } from '../DriverSetup.js'
import { LoginPage } from '../../pages/Login/LoginPage.js';
import generateCPF from '../../data/generateCpf.js'

let driver;
let loginPage;
let cpf = generateCPF()

describe('Login Test', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should open the login page', async function() {
    await loginPage.open();
  });

  it('must log in', async function() {
    await loginPage.enterCpf(cpf);
    await loginPage.clickLogin();
  });
});