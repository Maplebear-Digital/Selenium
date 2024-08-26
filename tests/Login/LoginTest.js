import { getDriver } from '../DriverSetup.js'
import { LoginPage } from '../../pages/Login/LoginPage.js';
import generateCPF from '../../functions/generateCpf.js'
import saveScreenshot from '../../functions/screenshot.js'

let driver;
let loginPage;
let cpf = generateCPF()

describe('Login Test', function () {
  this.timeout(30000);

  before(async function () {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should open the login page', async function () {
    try {
      await loginPage.open();
      await saveScreenshot(driver, 'screenshots/1. Deve abrir a página de login.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/1_error_should_open_the_login_page.png');
        await driver.quit();
      }

      throw error;
    }
  });

  it('must login', async function () {
    try {
      await loginPage.enterCpf(cpf);
      await saveScreenshot(driver, 'screenshots/2. deve preencher o CPF.png');
      await loginPage.clickLogin();
      await saveScreenshot(driver, 'screenshots/3. A página de registro deve abrir.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/2_error_must_register_new_user_login.png')
        await driver.quit();
      }

      throw error;
    }
  });

  it('must open login in admin', async function () {
    try {
      await loginPage.openAdmin();
      await saveScreenshot(driver, 'screenshots/4.Deve abrir o painel adminsitrativo.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/3_error_should_open_the_login_admin_page.png');
        await driver.quit();
      }

      throw error;
    }
  });

  it('must login in admin', async function () {
    try {
      await loginPage.enterUserAdmin('viniciush.oliveira');
      await loginPage.enterPasswordAdmin('Senha123@@@@');
      await saveScreenshot(driver, 'screenshots/5. Inserir as credenciais de acesso.png');
      await loginPage.clickLoginAdmin();
      await saveScreenshot(driver, 'screenshots/6. Fazer login e acessar a tela principal do painel.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/2_error_must_admin_login.png')
        await driver.quit();
      }

      throw error;
    }
  });

});