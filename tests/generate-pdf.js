const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'screenshots');
const outputPDF = path.join(__dirname, 'screenshots', 'test-results.pdf');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream(outputPDF));

fs.readdirSync(screenshotsDir).forEach(file => {
    const filePath = path.join(screenshotsDir, file);
    if (path.extname(filePath) === '.png') {
        doc.addPage().image(filePath, {
            fit: [500, 400],
            align: 'center',
            valign: 'center'
        });
    }
});

doc.end();
console.log(`PDF gerado em ${outputPDF}`);
