const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function uniqueLetters(str) {
    if (str === '') {
        return '';
    }
    const stringSet = new Set(str);
    let letters = Array.from(stringSet).join("");

    return letters.replace(/[^a-zA-Z]+/g, '').split('').sort().join('');
}

export function isPangram(str) {
    return (uniqueLetters(str.toLowerCase()) === ALPHABET);
}

let inputs = [
    "Five quacking Zephyrs jolt my wax bed.",
    'the quick brown fox jumps over with lazy FX',
];

for (let input of inputs) {
    console.log(input, "-> ", isPangram(input));
}