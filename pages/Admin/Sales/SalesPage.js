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
    let loginButton = await this.driver.wait(until.elementLocated(By.id('guest_to_customer')), this.timeout);
    await this.driver.wait(until.elementIsVisible(loginButton), this.timeout);
    await this.driver.wait(until.elementIsEnabled(loginButton), this.timeout);
    await loginButton.click();
  }

  async acceptLoginCustomer() {
    let acceptLoginButton = await this.driver.wait(until.elementLocated(By.className('action-accept')), this.timeout);
    await this.driver.wait(until.elementIsVisible(acceptLoginButton), this.timeout);
    await this.driver.wait(until.elementIsEnabled(acceptLoginButton), this.timeout);
    await acceptLoginButton.click();
  }

  async openLoggedCustomerFrontend() {
    await this.driver.get('https://b2c-staging.maplebearstore.com.br/customer/account/index/');
    await this.driver.sleep(5000);
  }
}