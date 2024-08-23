import { getDriver } from '../DriverSetup.js';
import { RegisterResponsible } from '../../pages/Users/RegisterResponsiblePage.js';
import { strict as assert } from 'assert';
import saveScreenshot from '../../functions/screenshot.js'


let driver;
let registerResponsible;
let randomIndex = Math.floor(Math.random() * (999999999 - 1) + 1)

describe('Register Responsible Test', function () {
  this.timeout(30000);

  before(async function () {
    driver = await getDriver();
    registerResponsible = new RegisterResponsible(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });


  it('should register responsible', async function () {
    try{await registerResponsible.insertNameResponsible('Alvaro Araujo');
      console.log('insertNameResponsible')
    await registerResponsible.insertTelephone('1240028922');
      console.log('insertNameResponsible')
    await registerResponsible.insertEmail('email' + randomIndex + '@testesteste.com');
      console.log('insertNameResponsible')
    await registerResponsible.insertPassword('Senha123@');
      console.log('insertNameResponsible')
    await registerResponsible.insertConfirmPassword('Senha123@');
      console.log('insertNameResponsible')
    await saveScreenshot(driver, 'screenshots/4_success_should_register_responsible_pt1.png');
      console.log('insertNameResponsible')
    await registerResponsible.clickButtonToContinueToAddress();
      console.log('insertNameResponsible')
    await registerResponsible.selectCheckbox();
      console.log('insertNameResponsible')
    await registerResponsible.insertCEP(12092856);
      console.log('insertNameResponsible')
    await registerResponsible.insertAddress2('Casa 2');
      console.log('insertNameResponsible')
    await registerResponsible.insertNumber('450');
      console.log('insertNameResponsible')
    await saveScreenshot(driver, 'screenshots/5_success_should_register_responsible_pt2.png');
    await registerResponsible.clickButtonSaveResponsible();
      console.log('insertNameResponsible')
    }catch(error){
      if(driver){
        await saveScreenshot(driver, 'screenshots/4_error_should_register_responsible.png');
        await driver.quit();
      }
    
    throw error;
  }
  });

  /*
    it('should register responsible', async function() {
      console.log('Iniciando o teste: should register responsible');
      await registerResponsible.insertNameResponsible('Alvaro Araujo');
      console.log('Nome inserido');
      await registerResponsible.insertTelephone('1240028922');
      console.log('Telefone inserido');
      await registerResponsible.insertEmail('email' + randomIndex + '@testesteste.com');
      console.log('Email inserido');
      await registerResponsible.insertPassword('Senha123@');
      console.log('Senha inserida');
      await registerResponsible.insertConfirmPassword('Senha123@');
      console.log('Confirmação de senha inserida');
      await registerResponsible.clickButtonToContinueToAddress();
      console.log('Botão Continuar clicado');
      await registerResponsible.selectCheckbox();
      console.log('Checkbox selecionado');
      await registerResponsible.insertCEP(12092856);
      console.log('CEP inserido');
      await registerResponsible.insertAddress2('Casa 2');
      console.log('Endereço 2 inserido');
      await registerResponsible.insertNumber('450');
      console.log('Número inserido');
      await registerResponsible.clickButtonSaveResponsible();
      console.log('Botão Salvar Responsável clicado');
      this.driver.sleep(5000);
      console.log('Terminou o time');
  }); */
});