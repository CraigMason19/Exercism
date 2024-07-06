export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Checks if a given character is a letter (a-z or A-Z).
 *
 * The function determines if the input character is an alphabetic letter
 * by comparing its lowercase and uppercase versions.
 *
 * @param {string} c - The character to be checked. Should be a single character string.
 * @returns {boolean} `true` if the character is a letter, `false` otherwise.
 */
export const isLetter = (c: string): boolean => {
    return c.toLowerCase() != c.toUpperCase();
};

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
export const indexFromLetter = (letter: string): number => {
    return letter.toLowerCase().charCodeAt(0) - 97;
}

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
export const positionFromLetter = (letter: string): number => {
    return letter.toLowerCase().charCodeAt(0) - 97 + 1;
}

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
export const letterFromIndex = (index: number, returnUppercase: boolean = false): string => {
    // JS modulus operate doesn't work for negative numbers
    // e.g. -9 % 26 = -9 -> default JS
    //      -9 % 26 = 17 -> What is wanted
    let i = ((index % 26) + 26) % 26;

    return (returnUppercase === false) ? ALPHABET.toLowerCase()[i] : ALPHABET[i];
};

/**
 * Generates a random uppercase letter from the alphabet.
 *
 * The function returns a randomly selected letter from the uppercase alphabet (A-Z).
 *
 * @returns {string} A randomly selected uppercase letter from 'A' to 'Z'.
 */
export const randomLetter = () => {
  return ALPHABET[Math.floor(Math.random() * 26)];
}