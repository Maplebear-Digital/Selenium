import { getDriver } from '../DriverSetup.js';
import { PaymentPage } from '../../pages/Checkout/PaymentPage.js';
import { strict as assert } from 'assert';
import saveScreenshot from '../../functions/screenshot.js'
let driver;
let payment;


describe('Payment', function () {
  this.timeout(30000);

  before(async function () {
    driver = await getDriver();
    payment = new PaymentPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should choose credit card', async function () {
    try {
      await payment.paymentCreditCard();
      //await saveScreenshot(driver, 'screenshots/Success/Checkout/CreditCard/should_choose_credit_card_pt1.png');
      await payment.insertCreditCardCredencials('5155901222280001', '123', '12', '2026', 'Teste GetNet');
      await saveScreenshot(driver, 'screenshots/Success/Checkout/CreditCard/should_choose_credit_card.png');
      await payment.payCreditCard();
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/Error/Checkout/CreditCard/should_choose_credit_card.png');
        await driver.quit();
      }
      throw error;
    }
  });
  
});