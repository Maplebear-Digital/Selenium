import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

const screenshotsDir = path.join(process.cwd(), 'screenshots');
const outputPDF = path.join(screenshotsDir, 'test-results.pdf');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(outputPDF));

// Página inicial
doc.fontSize(26)
    .text('Report de teste', { align: 'center' })
    .moveDown(0.5)
    .fontSize(20)
    .text('Testes no Magento', { align: 'center' });

doc.addPage(); // Adiciona uma nova página para as imagens

// Filtra os arquivos de imagem
const imageFiles = fs.readdirSync(screenshotsDir).filter(file => path.extname(file) === '.png');

imageFiles.forEach((file, index) => {
    const filePath = path.join(screenshotsDir, file);

    if (index > 0) {
        doc.addPage(); // Adiciona uma nova página para cada imagem, exceto a primeira
    }

    const title = path.basename(file, path.extname(file));

    // Define a cor do título como verde
    doc.fillColor('green')
        .fontSize(18)
        .text(title, { align: 'center', underline: true }); // Título centralizado e sublinhado

    doc.moveDown(); // Adiciona um espaço entre o título e a imagem

    doc.image(filePath, {
        fit: [500, 400], // Ajusta o tamanho da imagem conforme necessário
        align: 'center',
        valign: 'center'
    });
});

doc.end();
console.log(`PDF gerado em ${outputPDF}`);
