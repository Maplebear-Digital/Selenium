import { By, until } from 'selenium-webdriver';

var cont = 0;
export class CartPage {
    constructor(driver) {
        this.driver = driver;
    }




    async continueToCheckout() {
        let continueButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div/div[2]/div/div[2]/button')), this.timeout);
        await continueButton.click();
    }
    
    async verifyPearson() {
        let nameSlm = await this.driver.wait(until.elementLocated(By.css('#wrapper > div.dependent > div > div.product-info > div.name')), this.timeout);
        let nameSlmText = await nameSlm.getText();
        if (nameSlmText.includes('SLM+ Year 3')) {
            await  this.continueToCheckout();
            await this.verifyModalPearson();
            let checkboxButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="wrapper"]/div[1]/div[3]/div[1]')), this.timeout);
            await checkboxButton.click();
          //  await this.continueToCheckout();
            cont = 1;
        }  
        if (nameSlmText.includes('SLM+ Bear Care') || nameSlmText.includes('SLM+ Toddler') ||
            nameSlmText.includes('SLM+ Nursery') || nameSlmText.includes('SLM+ Junior Kidergarten') ||
            nameSlmText.includes('SLM+ Senior Kindergarten') || nameSlmText.includes('SLM+ Year 1') ||
            nameSlmText.includes('SLM+ Year 2') || nameSlmText.includes('SLM+ Year 10') ||
            nameSlmText.includes('SLM+ Year 11') || nameSlmText.includes('SLM+ Year 12')) {
                
                
                cont = 1;
        }
        else {
           cont = 2;
        }

    }

    async verifyModalPearson() {
        let backToAddPearson = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div/div[3]/div[1]/button')), this.timeout);
        await backToAddPearson.click();
    }

    async continueWithoutPearson(){
        let continueButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div/div[3]/div[2]/button')), this.timeout);
        await continueButton.click();
    }

    async verifyCheckout(){
        if(cont == 1){
            return await this.continueToCheckout();
        }
        else{
            await this.continueToCheckout();
            await  this.verifyModalPearson();
            let checkboxButton1 = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="wrapper"]/div[1]/div[3]/div[1]')), this.timeout); 
            await checkboxButton1.click();
            await this.continueToCheckout();
            return await this.continueWithoutPearson();
        }
    }

}