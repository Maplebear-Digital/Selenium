import { Builder, By, until, Select  } from 'selenium-webdriver';

export class RegisterStudent {
    constructor(driver) {
        this.driver = driver;
    }


    async createStudent() {
        let StudentCreateButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div/div/div[1]/div/div[3]/a[1]/button')), this.timeout);
        await StudentCreateButton.click();
    }


    async selectSchool() {
    let selectSchools = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="school"]')), this.timeout);
    let select = new Select(selectSchools);
    let options = await select.getOptions();
    let randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    await select.selectByIndex(randomIndex);
        
    }


    async insertNameStudent(name) {
        let nameField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dependent-create-section"]/span[1]/input')), this.timeout);
        await nameField.sendKeys(name);
    }

    async birthdayDate(date) {
        let bdField = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dependent_date_of_birth"]')), this.timeout);
        await bdField.sendKeys(date)
    }

    async selectGender() {
        let selectGender = await this.driver.wait(until.elementLocated(By.xpath('//*[@id=\"gender\"]')), this.timeout);
        let select = new Select(selectGender);
        let options = await select.getOptions();
        let randomIndex = Math.floor(Math.random() * (options.length - 1) + 1);
        await select.selectByIndex(randomIndex);
    }

    async clickButtonToContinueToCourses(){
        let continueButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dependent-create-section"]/div[3]/button')),this.timeout);
        await continueButton.click();
    }

    async selectYear(){
        let selectYear = await this.driver.wait(until.elementLocated(By.xpath('//*[@id=\"year\"]')),this.timeout);
        let select = new Select(selectYear);
        let option = await select.getOptions();
        let randomIndex = Math.floor(Math.random() * (option.length - 1)+1);
        await select.selectByIndex(randomIndex);
    }

    async selectGrade(){
        let selectGrade = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="serie"]')),this.timeout);
        let select = new Select(selectGrade);
        let option = await select.getOptions();
        let randomIndex = Math.floor(Math.random()* (option.length - 1)+1);
        await select.selectByIndex(randomIndex);
    }

    async clickButtonRegisterStudent(){
        let buttonRegister = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dependent-year-serie-section"]/div[4]/button')),this.timeout);
        await buttonRegister.click();
    }

    async clickButtonRegisterAnotherStudent(){
        let buttonAnotherStudent = await this.driver.wait(until.elementLocated(By.xpath('//*[@id=\"app\"]/div/div[1]/div[1]/div[3]/div[4]/a/button')),this.timeout);
        await buttonAnotherStudent.click();
    }

    async clickButtonContinueRegisterResponsible(){
        let buttonContinue = await this.driver.wait(until.elementLocated(By.xpath('//*[@id=\"app\"]/div/div[1]/div[1]/div[3]/div[5]/a/button')),this.timeout);
        await buttonContinue.click();
    }

    async verifyStudent(expectedName){
        let studentNameElement = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="dependent-info"]/span[1]')), this.timeout);
        let studentNameText = await studentNameElement.getText();
        return studentNameText.includes(expectedName);
    }


    async registerStudentLogged(){
        let registerStudentButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[3]/input')),this.timeout);
        await registerStudentButton.click();
    }
}
