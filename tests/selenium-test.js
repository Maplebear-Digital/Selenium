import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';
import fs from 'fs';

(async function example() {
    // Configuração para rodar o Chrome headless
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://b2c-staging.maplebearstore.com.br/');

        // Adicione seus testes aqui
        let title = await driver.getTitle();
        console.log(title);

        //variaveis secret
        console.log(process.env.ADMIN_LOGIN_USERNAME);
        console.log(process.env.ADMIN_LOGIN_PASSWORD);

        // Captura de tela da página inicial
        let screenshotPath = path.join(process.cwd(), 'homepage.png');
        await driver.takeScreenshot().then(
            function(image) {
                fs.writeFileSync(screenshotPath, image, 'base64');
            }
        );

    } finally {
        await driver.quit();
    }
})();
