const letters = require("./helper/letters");

function* loopString(str) {
    let index = 0;
    while (true) {
        if (index == str.length) {
            index = 0;
        }

        yield str[index++].toLowerCase();
    }
}

class Cipher {
    constructor(key = "") {
        this._key = key === "" ? this.generateKey() : key;
    }

    get key() {
        return this._key;    
    }

    generateKey() {
        return Array.from({ length: 100 }, () => (0, letters.randomLetter)().toLowerCase()).join('');
    }

    transform(message, operation) {
        const generator = loopString(this._key);
        let output = "";

        message.split('').forEach(letter => {
            let a = letter;
            let b = generator.next().value;
            output += (0, letters.letterFromIndex)((0, letters.indexFromLetter)(a) + (operation === '+' ? 1 : -1) * (0, letters.indexFromLetter)(b));
        });

        return output;
    }

    encode(message) {
        return this.transform(message, '+');
    }

    decode(message) {
        return this.transform(message, '-');
    }
}

const simpleCipher = new Cipher('abc');
console.log(simpleCipher.decode("iboaqcnecbfcr"));