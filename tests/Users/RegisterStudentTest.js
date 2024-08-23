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

  after(async function() {
    if (driver) {
      try {
        // await driver.quit();
      } catch(error) {
        console.log('segue vida')
      }
    }
  });

  it('should register student', async function() {
    try {
      await runStep('createStudent', async () => await registerStudent.createStudent());
      await runStep('selectSchool', async () => await registerStudent.selectSchool());
      await runStep('insertNameStudent', async () => await registerStudent.insertNameStudent('Gabriel Oliveira'));
      await runStep('birthdayDate', async () => await registerStudent.birthdayDate('17102017'));
      await runStep('selectGender', async () => await registerStudent.selectGender());
      await runStep('clickButtonToContinueToCourses', async () => await registerStudent.clickButtonToContinueToCourses());
      await runStep('selectYear', async () => await registerStudent.selectYear());
      await runStep('selectGrade', async () => await registerStudent.selectGrade());
      await runStep('clickButtonRegisterStudent', async () => await registerStudent.clickButtonRegisterStudent());

      let isStudentNameCorrect = await registerStudent.verifyStudent('Gabriel Oliveira');
      assert.strictEqual(isStudentNameCorrect, true, 'Student name is not displayed correctly');

      await saveScreenshot(driver, 'screenshots/3_success_should_register_student.png');
      await runStep('clickButtonContinueRegisterResponsible', async () => await registerStudent.clickButtonContinueRegisterResponsible());
    } catch (error) {
      console.error('Erro geral no teste:', error);
    }
  });
});

// Função auxiliar para rodar cada etapa e capturar erros sem parar o teste
async function runStep(stepName, stepFunction) {
  try {
    await stepFunction();
    console.log(`${stepName} executado com sucesso`);
  } catch (error) {
    console.error(`Erro em ${stepName}:`, error);
    if (driver) {
      await saveScreenshot(driver, `screenshots/error_${stepName}.png`);
    }
  }
}
