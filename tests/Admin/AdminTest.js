import { Builder, By, until } from 'selenium-webdriver';
import saveScreenshot from '../../functions/screenshot.js'

export async function loginMagentoAdmin() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://b2c-staging.maplebearstore.com.br/painel');
    await driver.wait(until.elementLocated(By.id('username')), 10000);
    await driver.findElement(By.id('username')).sendKeys('your-admin-username');
    await driver.findElement(By.id('login')).sendKeys('your-admin-password');
    await saveScreenshot(driver, 'screenshots/teste.png');
    await driver.findElement(By.className('action-login')).click();
    await driver.wait(until.titleIs('Dashboard / Magento Admin'), 10000);

    console.log('Login realizado com sucesso!');
  } catch (error) {
    console.error('Erro ao tentar realizar login:', error);
  } finally {
    await driver.quit();
  }
}
