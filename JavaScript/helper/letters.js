const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
};

const indexFromLetter = (letter) => {
    return letter.toLowerCase().charCodeAt(0) - 97;
}

const letterFromIndex = (index) => {
    // JS modulus operate doesn't work for negative numbers
    // e.g. -9 % 26 = -9 -> default JS
    //      -9 % 26 = 17 -> What is wanted
    let i = ((index % 26) + 26) % 26;

    return 'abcdefghijklmnopqrstuvwxyz'[i];
};

module.exports = { isLetter, indexFromLetter, letterFromIndex };
