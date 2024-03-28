function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCardNumber() {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += generateRandomNumber(0, 9);
        if ((i + 1) % 4 === 0 && i < 15) {
            cardNumber += ' ';
        }
    }
    return cardNumber;
}

function generateExpirationDate() {
    const month = generateRandomNumber(1, 12).toString().padStart(2, '0');
    const year = generateRandomNumber(22, 30).toString();
    return `${month}/${year}`;
}

function generateCVV() {
    return generateRandomNumber(100, 999).toString();
}

function generateCard() {
    document.querySelector('.card-number').textContent = generateCardNumber();
    document.querySelector('.expiration-date').textContent = generateExpirationDate();
    document.querySelector('.cvv').textContent = generateCVV();
}
