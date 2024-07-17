import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';
import fs from 'fs';
import PDFDocument from 'pdfkit';

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

        let title = await driver.getTitle();
        console.log(title);

        console.log(process.env.ADMIN_LOGIN_USERNAME);
        console.log(process.env.ADMIN_LOGIN_PASSWORD);

        // Captura de tela da página inicial
        let screenshotPath = path.join(process.cwd(), 'homepage.png');
        await driver.takeScreenshot().then(
            function(image) {
                fs.writeFileSync(screenshotPath, image, 'base64');
            }
        );

        // Gerar PDF com o título e a captura de tela
        let pdfPath = path.join(process.cwd(), 'test-report.pdf');
        const doc = new PDFDocument();

        // Write to a file
        doc.pipe(fs.createWriteStream(pdfPath));

        // Add a title
        doc.fontSize(25).text('Test Report', {
            align: 'center',
        });

        // Add some space
        doc.moveDown(2);

        // Add the screenshot image
        if (fs.existsSync(screenshotPath)) {
            doc.image(screenshotPath, {
                fit: [500, 400],
                align: 'center',
                valign: 'center'
            });
        } else {
            doc.text('Screenshot not found.', {
                align: 'center',
            });
        }

        // Finalize the PDF and end the stream
        doc.end();

    } finally {
        await driver.quit();
    }
})();
