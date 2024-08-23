import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

const screenshotsDir = path.join(process.cwd(), 'screenshots');
const outputPDF = path.join(screenshotsDir, 'test-results.pdf');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream(outputPDF));

fs.readdirSync(screenshotsDir).forEach(file => {
    const filePath = path.join(screenshotsDir, file);
    if (path.extname(filePath) === '.png') {
        doc.addPage().image(filePath, {
            fit: [500, 400], // Ajuste o tamanho da imagem conforme necessário
            align: 'center',
            valign: 'center'
        });
    }
});

doc.end();
console.log(`PDF gerado em ${outputPDF}`);