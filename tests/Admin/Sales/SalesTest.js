import { getDriver } from '../../DriverSetup.js'
import { SalesPage } from '../../../pages/Admin/Sales/SalesPage.js';
import generateCPF from '../../../functions/generateCpf.js'
import saveScreenshot from '../../../functions/screenshot.js'

let driver;
let salesPage;
let cpf = generateCPF()

describe('Order Admin Test', function () {
  this.timeout(30000);

  before(async function () {
    driver = await getDriver();
    salesPage = new SalesPage(driver);
  });

  // after(async function() {
  //   await driver.quit();
  // });

  it('should open the list of orders', async function () {
    try {
      await salesPage.open();
      await saveScreenshot(driver, 'screenshots/7. Entrar na lista de pedidos.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/5. Erro ao entrar na lista de pedidos.png');
        await driver.quit();
      }

      throw error;
    }
  });

  it('should open an order', async function () {
    try {
      await salesPage.openOrder('317014');
      await saveScreenshot(driver, 'screenshots/8. Entrar no pedido 317014.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/5. Erro ao entrar na tela de um pedidos.png');
        await driver.quit();
      }

      throw error;
    }
  });

  it('should make login in customer', async function () {
    try {
      await salesPage.loginCustomer();
      await salesPage.openLoggedCustomerFrontend();
      await saveScreenshot(driver, 'screenshots/9. Fazer login no cliente que fez o pedido.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/5. Erro ao entrar na tela de um pedidos.png');
        await driver.quit();
      }

      throw error;
    }
  });

});