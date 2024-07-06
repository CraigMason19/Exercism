"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomLetter = exports.letterFromIndex = exports.positionFromLetter = exports.indexFromLetter = exports.isLetter = exports.ALPHABET = void 0;
exports.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
 * Checks if a given character is a letter (a-z or A-Z).
 *
 * The function determines if the input character is an alphabetic letter
 * by comparing its lowercase and uppercase versions.
 *
 * @param {string} c - The character to be checked. Should be a single character string.
 * @returns {boolean} `true` if the character is a letter, `false` otherwise.
 */
const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
};
exports.isLetter = isLetter;
/**
 * Converts a letter to its corresponding zero-based index in the alphabet.
 *
 * The function assumes that the input is a single alphabetic character.
 * It converts the character to lowercase and then calculates the index
 * based on the ASCII value of the letter.
 *
 * @param {string} letter - The letter to be converted. Should be a single alphabetic character.
 * @returns {number} The zero-based index of the letter in the alphabet. 'a' -> 0, 'b' -> 1, ..., 'z' -> 25.
 */
const indexFromLetter = (letter) => {
    return letter.toLowerCase().charCodeAt(0) - 97;
};
exports.indexFromLetter = indexFromLetter;
/**
 * Converts a letter to its corresponding nth position in the alphabet.
 *
 * The function assumes that the input is a single alphabetic character.
 * It converts the character to lowercase and then calculates the position
 * based on the ASCII value of the letter.
 *
 * @param {string} letter - The letter to be converted. Should be a single alphabetic character.
 * @returns {number} The one-based position of the letter in the alphabet. 'a' -> 1, 'b' -> 2, ..., 'z' -> 26.
 */
const positionFromLetter = (letter) => {
    return letter.toLowerCase().charCodeAt(0) - 97 + 1;
};
exports.positionFromLetter = positionFromLetter;
/**
 * Converts a zero-based index to its corresponding letter in the alphabet.
 *
 * The function handles negative indices by wrapping them around the alphabet.
 * It can also return either uppercase or lowercase letters based on the input.
 *
 * @param {number} index - The zero-based index to be converted. Can be any integer.
 * @param {boolean} [returnUppercase=false] - Whether to return the letter in uppercase. Defaults to false.
 * @returns {string} The letter corresponding to the given index. 0 -> 'a' or 'A', 1 -> 'b' or 'B', ..., 25 -> 'z' or 'Z'.
 */
const letterFromIndex = (index, returnUppercase = false) => {
    // JS modulus operate doesn't work for negative numbers
    // e.g. -9 % 26 = -9 -> default JS
    //      -9 % 26 = 17 -> What is wanted
    let i = ((index % 26) + 26) % 26;
    return (returnUppercase === false) ? exports.ALPHABET.toLowerCase()[i] : exports.ALPHABET[i];
};
exports.letterFromIndex = letterFromIndex;
/**
 * Generates a random uppercase letter from the alphabet.
 *
 * The function returns a randomly selected letter from the uppercase alphabet (A-Z).
 *
 * @returns {string} A randomly selected uppercase letter from 'A' to 'Z'.
 */
const randomLetter = () => {
    return exports.ALPHABET[Math.floor(Math.random() * 26)];
};
exports.randomLetter = randomLetter;
//# sourceMappingURL=letters.js.map