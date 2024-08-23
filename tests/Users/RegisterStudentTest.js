import { getDriver } from '../DriverSetup.js';
import { RegisterStudent } from '../../pages/Users/RegisterStudentPage.js';
import { strict as assert } from 'assert';
import saveScreenshot from '../../functions/screenshot.js';

let driver;
let registerStudent;

describe('Register Student Test', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    registerStudent = new RegisterStudent(driver);
  });

  // after(async function() {
  //   if (driver) {
  //     await driver.quit();
  //   }
  // });

  it('should register student', async function() {
    try {
      await registerStudent.createStudent();
      console.log('createStudent')
      await registerStudent.selectSchool();
      console.log('selectSchool')
      await registerStudent.insertNameStudent('Gabriel Oliveira');
      console.log('insertNameStudent')
      await registerStudent.birthdayDate('17102017');
      console.log('birthdayDate')
      await registerStudent.selectGender();
      console.log('selectGender')
      await registerStudent.clickButtonToContinueToCourses();
      console.log('clickButtonToContinueToCourses')
      await registerStudent.selectYear();
      console.log('selectYear')
      await registerStudent.selectGrade();
      console.log('selectGrade')
      await registerStudent.clickButtonRegisterStudent();
      console.log('clickButtonRegisterStudent')

      let isStudentNameCorrect = await registerStudent.verifyStudent('Gabriel Oliveira');
      assert.strictEqual(isStudentNameCorrect, true, 'Student name is not displayed correctly');

      await saveScreenshot(driver, 'screenshots/3_success_should_register_student.png');
      await registerStudent.clickButtonContinueRegisterResponsible();
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/3_error_should_register_student.png');
      }
      throw error;
    }
  });
});
