const ALPHABET: string = 'abcdefghijklmnopqrstuvwxyz';

function uniqueLetters(str: string): string {
    if (str === '') {
        return '';
    }

    const stringSet: Set<string> = new Set(str.toLowerCase());
    let letters: string = Array.from(stringSet).join("");

    return letters.replace(/[^a-z]+/g, '').split('').sort().join('');
}

export function isPangram(str:string): boolean {
    return (uniqueLetters(str) === ALPHABET)
}

let inputs: string[] = [
    "Five quacking Zephyrs jolt my wax bed.",
    'the quick brown fox jumps over with lazy FX',
];

for(let input of inputs) {
    console.log(input, "-> ", isPangram(input));
}