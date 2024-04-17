const primes = require('./helper/primes');
const letters = require('./helper/letters');

const blockFormat = (str, blockSize=5) => {
    let seperatorCounter = 0;
    let formatted = "";
  
    for(let i = 0; i < str.length; i++)
    {
        formatted += str[i];
        seperatorCounter++;
  
        if (seperatorCounter == blockSize)
        {
            formatted += " ";
            seperatorCounter = 0;
        }
    }
  
    // Just in case it was exactly divisible by 5 and had an extra space put on the end
    return formatted.trimEnd();
};

// Modular Multiplicative Inverse
const MMI = (n) => {
    let x = 1;

    while ((n * x) % 26 != 1) {
        x++;
    };

    return x;
};

const encodeLetter = (letter, key) => {
    if(!letters.isLetter(letter)) {
        return letter;
    }

    let result = (key.a * letters.indexFromLetter(letter) + key.b) % 26;
    return letters.letterFromIndex(result);
};

const decodeLetter = (letter, key) =>{
    if(!letters.isLetter(letter)) {
        return letter;
    }

    let result = MMI(key.a) * (letters.indexFromLetter(letter) - key.b) % 26;
    return letters.letterFromIndex(result);
};

const encode = (phrase, key) => {
  if(!primes.areCoPrime(key.a, 26)) {
    throw new Error("a and m must be coprime.");
  }

  let result = 
    phrase.split("")
    .map(c => { return ". ,-_;:".includes(c) ? "" : encodeLetter(c, key) })
    .filter(c => c !== "");

  return blockFormat(result);
};

const decode = (phrase, key) => {
  if(!primes.areCoPrime(key.a, 26)) {
    throw new Error("a and m must be coprime.");
  }

  let result =
    phrase.split("")
    .map(c => { return ". ,-_;:".includes(c) ? "" : decodeLetter(c, key) })

  return result.join("");
};

let phrase = "The quick brown fox jumps over the lazy dog.";
let encoded = encode(phrase, { a: 19, b: 13 });
let decoded = decode(encoded, { a: 19, b: 13 });

console.log(phrase);
console.log(encoded);
console.log(decoded);