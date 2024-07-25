import { Builder, By, until, Select } from 'selenium-webdriver';
import { writeFile } from 'fs/promises';
export class RegisterResponsible {
    constructor(driver) {
        this.driver = driver;
    }


    async insertNameResponsible(name) {
        let nameField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-create"]/span[1]/input[1]')), this.timeout);
        await nameField.sendKeys(name);
    }

    async insertTelephone(telephone) {
        let telephoneField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-telephone"]')), this.timeout);
        await telephoneField.sendKeys(telephone)
    }

    async insertEmail(email) {
        let emailField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-create"]/span[2]/input')), this.timeout);
        await emailField.sendKeys(email)
    }

    async insertPassword(password) {
        let passwordField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="password"]')), this.timeout);
        await passwordField.sendKeys(password)
    }

    async insertConfirmPassword(password) {
        let passwordField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-create"]/span[4]/div/div/input')), this.timeout);
        await passwordField.sendKeys(password)
    }

    async clickButtonToContinueToAddress() {
        let continueButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-create"]/div[2]/button')), this.timeout);
        await continueButton.click();
    }

    async insertCEP(cep) {
        let cepField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address"]/span[1]/input')), this.timeout);
        await cepField.sendKeys(cep)
    }
    //*[@id="customer-address"]/span[3]/input
    async insertNumber(number) {
        let numberField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address-number"]')), this.timeout);
        await numberField.sendKeys(number)
    }

    async insertAddress2(address) {

        let addressField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address-complement"]')), this.timeout);
        await addressField.sendKeys(address)

    }

    async selectCheckbox() {
        let checkboxButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address"]/div[3]/input')), this.timeout);
        await checkboxButton.click();
    }

    async clickButtonSaveResponsible() {
        let maxTry = 200;
        let retryCount = 0;

        while (retryCount < maxTry) {
            // search field address
            let addressField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address"]/span[3]/input')), this.timeout);
            // get text from address field
            let addressText = await addressField.getAttribute('value');

            if (addressText.trim() !== '') {
                let saveButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="customer-address"]/div[4]/button')), this.timeout);
                await saveButton.click();
                break;
            }
            await this.driver.sleep(500);
            retryCount++;
        }
    }

    async verifyResponsible() {
            // Verificar se o responsável foi salvo corretamente
            try{
            let saveSuccessMessage = await this.driver.wait(until.elementLocated(by.xpath('//*[@id="maincontent"]/div[2]/div/div[2]/div[2]/div[1]')),this.timeout);
            if (saveSuccessMessage) {
                console.log('Responsável salvo com sucesso');
            } else {
                console.log('Falha ao salvar responsável');
            }
        } catch (error) {
            console.log('Erro durante o teste:', error.message);
            // Captura de tela em caso de falha
            let screenshot = await driver.takeScreenshot();
            await writeFile('screenshot_error.png', screenshot, 'base64');
            console.log('Captura de tela salva como screenshot_error.png');
            throw error; // Rethrow the error to ensure the test fails
        }
    }
}


