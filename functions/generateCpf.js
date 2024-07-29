function generateCPF() {
    function randomDigit() {
        return Math.floor(Math.random() * 10);
    }

    function calculateDigit(cpf, factor) {
        let sum = 0;
        for (let i = 0; i < cpf.length; i++) {
            sum += cpf[i] * (factor - i);
        }
        let result = 11 - (sum % 11);
        return result > 9 ? 0 : result;
    }

    let cpf = [];
    for (let i = 0; i < 9; i++) {
        cpf.push(randomDigit());
    }

    let digit1 = calculateDigit(cpf, 10);
    cpf.push(digit1);
    let digit2 = calculateDigit(cpf, 11);
    cpf.push(digit2);

    return cpf.join('');
}

export default generateCPF;