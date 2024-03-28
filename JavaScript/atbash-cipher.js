const CIPHER = "zyxwvutsrqponmlkjihgfedcba";
const BLOCK_SIZE = 5;

const encodeLetter = (letter) => {
    if(!letter.match(/[a-zA-Z]/)) {
        return letter;
    }

    let index = letter.toLowerCase().charCodeAt(0) - 97;
    return CIPHER[index];
}
    
const cleanString = (string) => {
    return string.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "");
}

const encode = (plainValue) => {
    let clean = cleanString(plainValue)
    let encoded = "";
    let seperatorCounter = 0;

    for(let i = 0; i < clean.length; i++)
    {
        encoded += encodeLetter(clean[i]);
        seperatorCounter++;

        if (seperatorCounter == BLOCK_SIZE)
        {
            encoded += " ";
            seperatorCounter = 0;
        }
    }

    // Just in case it was exactly divisible by 5 and had an extra space put on the end
    return encoded.trimEnd();
};

const decode = (encodedValue) => {
    let decoded = "";
    let clean = cleanString(encodedValue)

    for(let i = 0; i < clean.length; i++) {
        decoded += encodeLetter(clean[i]);
    }

    return decoded;    
};


const original = "The quick brown fox jumps over the lazy dog.";
const encoded = encode(original);
const decoded = decode(encoded);

console.log(`original -> ${original}`);
console.log(`encoded -> ${encoded}`);
console.log(`decoded -> ${decoded}`);