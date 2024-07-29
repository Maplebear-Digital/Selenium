import { Builder, By, until, Select } from 'selenium-webdriver';

export class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async buyMaterials() {
        
        let buyButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[2]/div[2]/div[1]/div[1]')), this.timeout);
        await buyButton.click();
        
    }

    async myOrders() {
        let orderButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[1]')), this.timeout);
        await orderButton.click();
    }

    async myStudent() {
        let myStudent = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[2]/div[2]/div[1]/div[2]')), this.timeout);
        await myStudent.click();
    }

    async knowSlm() {
        let slmButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[2]')), this.timeout);
        await slmButton.click();
    }

}
