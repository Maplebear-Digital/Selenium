import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

const screenshotsDir = path.join(process.cwd(), 'screenshots');
const outputPDF = path.join(screenshotsDir, 'test-results.pdf');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(outputPDF));

// Página inicial
doc.fontSize(26)
    .text('Report de Teste', { align: 'center' })
    .moveDown(0.5)
    .fontSize(20)
    .text('Testes na Maplebear Store by Magento 2.4.6', { align: 'center' })
    .moveDown(0.5)
    .fontSize(16)
    .text(formatDateAndTime(), { align: 'center' });

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

function formatDateAndTime() {
    const now = new Date();

    // Formatar a data no formato d/M/Y
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses são de 0-11
    const year = now.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    // Formatar a hora no formato hh:mm:ss
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Gerar a mensagem final
    const message = `Testes realizados em ${formattedDate} às ${formattedTime}`;

    return message;
}
