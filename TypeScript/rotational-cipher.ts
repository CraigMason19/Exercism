const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isLetter(c: string): boolean {
  return c.toLowerCase() != c.toUpperCase();
}

function isLowerCase(str: string): boolean {
  return str === str.toLowerCase() &&
         str !== str.toUpperCase();
}

function rotateLetter(c: string, shiftKey: number): string {
  if(shiftKey === 0 || shiftKey === 26 || !isLetter(c)) {
    return c;
  }

  let index = (LETTERS.indexOf(c.toLowerCase()) + shiftKey) % 26;
     
  return isLowerCase(c) ? LETTERS[index] : LETTERS[index+26];
}

export const rotate = (text: string, shiftKey: number) => {
  if(shiftKey == 0 || shiftKey == 26) {
    return text;
  }

  let output = "";

  for(let i = 0; i < text.length; i++) {
    output += rotateLetter(text[i], shiftKey);
  }

  return output;
};

const phrase = "The quick brown fox jumps over the lazy dog.";
const phrase_rot13 = "Gur dhvpx oebja sbk whzcf bire gur ynml qbt.";

const encodedPhrase = rotate(phrase, 13);

console.log(`Orginal: ${phrase}`);
console.log(`Answer: ${phrase_rot13}`);
console.log(`MyCode: ${encodedPhrase}`);
console.log(encodedPhrase === phrase_rot13);