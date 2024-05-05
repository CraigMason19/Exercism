exports.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
};
exports.isLetter = isLetter;

const indexFromLetter = (letter) => {
    return letter.toLowerCase().charCodeAt(0) - 97;
};
exports.indexFromLetter = indexFromLetter;

const letterFromIndex = (index) => {
    // JS modulus operate doesn't work for negative numbers
    // e.g. -9 % 26 = -9 -> default JS
    //      -9 % 26 = 17 -> What is wanted
    let i = ((index % 26) + 26) % 26;
    return exports.ALPHABET.toLowerCase()[i];
};
exports.letterFromIndex = letterFromIndex;

const randomLetter = () => {
    return exports.ALPHABET[Math.floor(Math.random() * 26)];
};
exports.randomLetter = randomLetter;