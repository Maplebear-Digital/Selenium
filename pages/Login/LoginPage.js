import { By, until } from 'selenium-webdriver';

export class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://b2c-staging.maplebearstore.com.br/customer/account/login/referer/aHR0cHM6Ly9iMmMtc3RhZ2luZy5tYXBsZWJlYXJzdG9yZS5jb20uYnIvY3VzdG9tZXIvYWNjb3VudC9pbmRleC8~/'; 
  }

  async open() {
    await this.driver.get(this.url);
  }

  async getTitle() {
    return await this.driver.getTitle();
  }

  async enterCpf(cpf) {
    let cpfField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="taxvat"]')), this.timeout);
    await this.driver.wait(until.elementIsVisible(cpfField), this.timeout);
    await cpfField.sendKeys(cpf);
  }
  async enterPassword(password) {
    let passwordField = await this.driver.wait(until.elementLocated(By.xpath('//input[@id="password"]')), this.timeout);
    await passwordField.sendKeys(password);
  }

  async clickLogin() {
    let loginButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="send2"]')), this.timeout);
    await this.driver.sleep(1000);
    await loginButton.click();
  }

  async closeCookies(){
    let cookkieButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="html-body"]/div[3]/aside[1]/div[2]/footer/button[2]')),this.timeout);
    await cookkieButton.click();
  }

 
}