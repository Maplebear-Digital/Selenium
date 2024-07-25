import { getDriver } from '../DriverSetup.js';
import { RegisterResponsible } from '../../pages/Users/RegisterResponsiblePage.js';
import { strict as assert } from 'assert';
import { writeFile } from 'fs/promises';
let driver;
let registerResponsible;
let randomIndex = Math.floor(Math.random() * (999999999 - 1)+1)

describe('Register Responsible Test', function() {
  this.timeout(30000);

  before(async function() {
    driver = await getDriver();
    registerResponsible = new RegisterResponsible(driver);
  });
 
  // after(async function() {
  //   await driver.quit();
  // });


it('should register responsible', async function() {
        await registerResponsible.insertNameResponsible('Alvaro Araujo');
        await registerResponsible.insertTelephone('1240028922');
        await registerResponsible.insertEmail('email' + randomIndex + '@testesteste.com');
        await registerResponsible.insertPassword('Senha123@');
        await registerResponsible.insertConfirmPassword('Senha123@');
        await registerResponsible.clickButtonToContinueToAddress();
        await registerResponsible.selectCheckbox();
        await registerResponsible.insertCEP(12092856);
        await registerResponsible.insertAddress2('Casa 2');
        await registerResponsible.insertNumber('450');
        await registerResponsible.clickButtonSaveResponsible();
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