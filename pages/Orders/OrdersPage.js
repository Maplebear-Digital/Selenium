import { By, until } from 'selenium-webdriver';

export class OrderPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openOrder() {
    let viewOrderButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="my-orders-table"]/tbody/tr/td[5]/a')), this.timeout);
    await viewOrderButton.click();
    
  }

  async verifyStatus(status){
    let statusLabelElement = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[1]/div[1]/span')),this.timeout);
    let labeltext = await statusLabelElement.getText();
    return labeltext.includes(status);

  }


  
}