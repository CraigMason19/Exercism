export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const isLetter = (c: string): boolean => {
    return c.toLowerCase() != c.toUpperCase();
};

export const indexFromLetter = (letter: string): number => {
    return letter.toLowerCase().charCodeAt(0) - 97;
}

export const letterFromIndex = (index: number): string => {
    // JS modulus operate doesn't work for negative numbers
    // e.g. -9 % 26 = -9 -> default JS
    //      -9 % 26 = 17 -> What is wanted
    let i = ((index % 26) + 26) % 26;

    return ALPHABET.toLowerCase()[i];
};

export const randomLetter = () => {
  return ALPHABET[Math.floor(Math.random() * 26)];
}