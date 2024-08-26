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
    let loginButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="guest_to_customer"]')), this.timeout);
    await this.driver.sleep(1000);
    await loginButton.click();
    await this.driver.sleep(1000);

    let AcceptLoginButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@class="action-accept"]')), this.timeout);
    await this.driver.sleep(1000);
    await AcceptLoginButton.click();
    await this.driver.sleep(10000);
  }

  async openLoggedCustomerFrontend() {
    await this.driver.get('https://b2c-staging.maplebearstore.com.br/customer/account/index/');
    await this.driver.sleep(5000);
  }
}