import { getDriver } from '../DriverSetup.js';
import { CartPage } from '../../pages/Cart/CartPage.js'
import { HomePage } from '../../pages/Home/HomePage.js';
import { LoginPage } from '../../pages/Login/LoginPage.js';

let driver;
let cart;
let login;
let home;

describe('Access Cart Test', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    cart = new CartPage(driver);
    home = new HomePage(driver);
    login = new LoginPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should access cart', async function() {
    await login.closeCookies();
    await home.buyMaterials();
    await cart.verifyPearson();

  });


  
});