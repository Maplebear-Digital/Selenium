const { Builder, By, until } = require('selenium-webdriver');
import saveScreenshot from '../../functions/screenshot.js'

(async function loginMagentoAdmin() {
  // Crie uma nova instância do navegador
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Acesse a página de login do Magento 2
    await driver.get('https://b2c-staging.maplebearstore.com.br/painel'); // Substitua pelo URL do seu site Magento

    // Aguarde até que o campo de login seja carregado
    await driver.wait(until.elementLocated(By.id('username')), 10000);

    // Preencha o campo de nome de usuário
    await driver.findElement(By.id('username')).sendKeys('viniciush.oliveira ');

    // Preencha o campo de senha
    await driver.findElement(By.id('login')).sendKeys('Senha123@@@@');

    await saveScreenshot(driver, 'screenshots/1_insert_user_login_admin_page.png');

    // Clique no botão de login
    await driver.findElement(By.className('action-login')).click();

    // Aguarde até que a página do painel seja carregada
    await driver.wait(until.titleIs('Dashboard / Magento Admin'), 10000);

    await saveScreenshot(driver, 'screenshots/1_admin_should_open.png');

    console.log('Login realizado com sucesso!');
  } catch (error) {
    console.error('Erro ao tentar realizar login:', error);
  } finally {
    // Feche o navegador
    await driver.quit();
  }
})();
