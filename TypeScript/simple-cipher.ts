import { randomLetter, indexFromLetter, letterFromIndex } from "./helper/letters";

function* loopString(str: string) {
    let index = 0;

    while (true) {
        if(index == str.length) {
            index = 0;
        }

        yield str[index++].toLowerCase();
    }
}

export class SimpleCipher {
    public key: string = "";

    constructor(key: string ="") {
        this.key = key === "" ? this.generateKey() : key
    }

    private generateKey(): string {
        return Array.from({ length: 100 }, () => randomLetter().toLowerCase()).join('');
    }

    private transform(message: string, operation: '+' | '-'): string {
        const generator = loopString(this.key);  
        let output = "";

        message.split('').forEach(letter => {
            let a = letter;
            let b = generator.next().value!;
            output += letterFromIndex(indexFromLetter(a) + (operation === '+' ? 1 : -1) * indexFromLetter(b));
        });

        return output;
    }
    
    encode(message: string): string {
        return this.transform(message, '+');
    }
    
    decode(message: string): string {
        return this.transform(message, '-');
    }
}

const simpleCipher = new SimpleCipher('abc');
console.log(simpleCipher.decode("iboaqcnecbfcr"));