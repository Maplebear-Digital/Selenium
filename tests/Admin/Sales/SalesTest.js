import { getDriver } from '../../DriverSetup.js'
import { SalesPage } from '../../../pages/Admin/Sales/SalesPage.js';
import generateCPF from '../../../functions/generateCpf.js'
import saveScreenshot from '../../../functions/screenshot.js'

let driver;
let salesPage;
let cpf = generateCPF()

describe('Login Test', function () {
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
      await saveScreenshot(driver, 'screenshots/4. Entrar na lista de pedidos.png');
    } catch (error) {
      if (driver) {
        await saveScreenshot(driver, 'screenshots/5. Erro ao entrar na lista de pedidos.png');
        await driver.quit();
      }

      throw error;
    }
  });

});