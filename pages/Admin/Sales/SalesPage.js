import { By, Key, until } from 'selenium-webdriver';

export class SalesPage {
  constructor(driver) {
    this.driver = driver;
    this.urlAdminSalesList = 'https://b2c-staging.maplebearstore.com.br/painel/sales/order';
  }

  async open() {
    await this.driver.get(this.urlAdminSalesList);
    await this.driver.sleep(5000);
  }

  async openOrder(orderId) {
    let orderUrl = 'https://b2c-staging.maplebearstore.com.br/painel/sales/order/view/order_id/'+ orderId +'/';
    await this.driver.get(orderUrl);
    await this.driver.sleep(5000);
  }

  async loginCustomer() {
    let loginButton = await driver.wait(until.elementLocated(By.id('guest_to_customer')), timeout);
    await driver.wait(until.elementIsVisible(loginButton), timeout);
    await driver.wait(until.elementIsEnabled(loginButton), timeout);
    await loginButton.click();

    // Aguarda até que o botão "action-accept" esteja visível e clicável
    let acceptLoginButton = await driver.wait(until.elementLocated(By.className('action-accept')), timeout);
    await driver.wait(until.elementIsVisible(acceptLoginButton), timeout);
    await driver.wait(until.elementIsEnabled(acceptLoginButton), timeout);
    await acceptLoginButton.click();
  }

  async openLoggedCustomerFrontend() {
    await this.driver.get('https://b2c-staging.maplebearstore.com.br/customer/account/index/');
    await this.driver.sleep(5000);
  }
}