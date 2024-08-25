import { By, until } from 'selenium-webdriver';

export class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://b2c-staging.maplebearstore.com.br/customer/account/login/referer/aHR0cHM6Ly9iMmMtc3RhZ2luZy5tYXBsZWJlYXJzdG9yZS5jb20uYnIvY3VzdG9tZXIvYWNjb3VudC9pbmRleC8~/'; 
    this.urlAdmin = 'https://b2c-staging.maplebearstore.com.br/painel';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async openAdmin() {
    await this.driver.get(this.urlAdmin);
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

  async enterUserAdmin(user) {
    let userField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="username"]')), this.timeout);
    await this.driver.wait(until.elementIsVisible(userField), this.timeout);
    await userField.sendKeys(user);
  }
  async enterPasswordAdmin(password) {
    let passwordField = await this.driver.wait(until.elementLocated(By.xpath('//input[@id="login"]')), this.timeout);
    await passwordField.sendKeys(password);
  }

  async clickLoginAdmin() {
    let loginButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@class-name="action-login"]')), this.timeout);
    await this.driver.sleep(1000);
    await loginButton.click();
    await this.driver.sleep(10000);
  }

  async clickLogin() {
    let loginButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="send2"]')), this.timeout);
    await this.driver.sleep(1000);
    await loginButton.click();
    await this.driver.sleep(10000);
  }

  async closeCookies(){
    let cookkieButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="html-body"]/div[3]/aside[1]/div[2]/footer/button[2]')),this.timeout);
    await cookkieButton.click();
  }

 
}