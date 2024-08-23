import { getDriver } from '../DriverSetup.js';
import { RegisterStudent } from '../../pages/Users/RegisterStudentPage.js';
import { strict as assert } from 'assert';
import saveScreenshot from '../../functions/screenshot.js'

let driver;
let registerStudent;




describe('Register Student Test', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    registerStudent = new RegisterStudent(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  
  it('should register student', async function() {
    
      try{
        await registerStudent.createStudent();
        await registerStudent.selectSchool();
        await registerStudent.insertNameStudent('Gabriel Oliveira');
        await registerStudent.birthdayDate('17102017');
        await registerStudent.selectGender();
        await registerStudent.clickButtonToContinueToCourses();
        await registerStudent.selectYear();
        await registerStudent.selectGrade();
        await registerStudent.clickButtonRegisterStudent();
        let isStudentNameCorrect = await registerStudent.verifyStudent('Gabriel Oliveira');
        assert.strictEqual(isStudentNameCorrect, true, 'Student name is not displayed correctly');
        await saveScreenshot(driver, 'screenshots/3_success_should_register_student.png')
        await registerStudent.clickButtonContinueRegisterResponsible();
      }catch(error){
        if(driver){
          await saveScreenshot(driver, 'screenshots/3_error_should_register_student.png')
          await driver.quit();
        }
      
      throw error;
    }
  
  
});

});