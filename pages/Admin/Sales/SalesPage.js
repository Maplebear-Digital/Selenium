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
}