import { Builder, By, until, Select } from 'selenium-webdriver';

export class PaymentPage {
    constructor(driver) {
        this.driver = driver;
    }


    async paymentSlip() {
        let paymentSlip = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="payment_form_getnet_paymentmagento_boleto"]/div[1]/label')), this.timeout);
        await paymentSlip.click();
    }

    async buy() {
        this.driver.sleep(2000);
        let buyButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="action-button-boleto"]')), this.timeout);
        await buyButton.click();
    }

    async paymentCreditCard(){
        let creditCard = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="payment_form_getnet_paymentmagento_cc"]/div[1]/label')), this.timeout);
        await creditCard.click();
    }

    async insertCreditCardCredencials(number,cid,month,year,name){
        let numbercard = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_number"]')), this.timeout);
        await numbercard.sendKeys(number);
        let cidCc = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_cid"]')), this.timeout);
        await cidCc.sendKeys(cid);
        let monthExpiration = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_expiration"]')), this.timeout);
        await monthExpiration.sendKeys(month);
        let yearExpiration = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_expiration_yr"]')), this.timeout);
        await yearExpiration.sendKeys(year);
        let nameCard = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_cardholder_name"]')), this.timeout);
        await nameCard.sendKeys(name);
        let installments = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="getnet_paymentmagento_cc_installments"]')), this.timeout);
        await installments.sendKeys('1');
       
    }

    async payCreditCard(){
        let button = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="action-button-cc"]')),this.timeout);
        await button.click();
    }

    

}
