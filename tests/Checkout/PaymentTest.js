import { getDriver } from '../DriverSetup.js';
import { PaymentPage } from '../../pages/Checkout/PaymentPage.js';
import { strict as assert } from 'assert';

let driver;
let payment;


describe('Payment', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    payment = new PaymentPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should choose credit card',async function(){
    await payment.paymentCreditCard();
    await payment.insertCreditCardCredencials('5155901222280001','123','12','2026','Teste GetNet');
  });


 // it('should choose payment slip', async function() {
  // await payment.paymentSlip();
 // await payment.buy();
 // });
});