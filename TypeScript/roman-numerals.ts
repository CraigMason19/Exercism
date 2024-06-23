interface NumeralValue {
    [key: string]: number;
};

const NUMERAL_VALUES: NumeralValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

// e.g. IX, XC
function usesSubtractivePairRule(numeral: string): Boolean {
    for(let i = 0; i < numeral.length; i++) {
        if(NUMERAL_VALUES[numeral[i]] > NUMERAL_VALUES[numeral[i-1]]) {
            return true;
        }
    }

    return false;
}

// Not needed to solve but might as well
function fromRoman(numeral: string): number {
    if(usesSubtractivePairRule(numeral) == false) {
        return Array.from(numeral).reduce((sum, c) => sum + (NUMERAL_VALUES[c] || 0), 0);        
    }

    let total = 0;

    for(let i = 0; numeral.length-1; i++) {
        if(NUMERAL_VALUES[numeral[i]] < NUMERAL_VALUES[numeral[i+1]]) {
            total -= NUMERAL_VALUES[numeral[i]];
        }
        else {
            total += NUMERAL_VALUES[numeral[i]];
        }
    }

    return total + NUMERAL_VALUES[numeral[numeral.length-1]];
}

function pad(str: string, length: number, char: string): string {
    return str + char.repeat(Math.max(0, length - str.length));
}

function extractMagnitudeParts(s: string, length: number): string[] {
    let result: string[] = [];

    for (let i = 0; i < length; i++) {
        result.push(pad(s[i], length - i, '0'));
    }
    
    return result;
}

// Works bellow 5000 (V with overscore).
export function toRoman(n: number): string {
    const s = n.toString();
    let length = s.length;

    // Determine digits, tens, hundreds, thousands
    // e.g. 1600 -> [1000, 600, 00, 0]
    let l = extractMagnitudeParts(s, length);
    let numeral = "";

    for (let item of l) {
        if (item[0] !== '0') {
            let length = item.length;
            let small = "";
            let mid = ""; 
            let big = "";

            if (length === 1) {
                [small, mid, big] = ['I', 'V', 'X'];
            } else if (length === 2) {
                [small, mid, big] = ['X', 'L', 'C'];
            } else if (length === 3) {
                [small, mid, big] = ['C', 'D', 'M'];
            } else if (length === 4) {
                numeral += 'M'.repeat(parseInt(item[0]));
                continue;
            }

            let n = parseInt(item[0]);

            if (n === 1) {
                numeral += small;
            } else if (n === 2) {
                numeral += small + small;
            } else if (n === 3) {
                numeral += small + small + small;
            } else if (n === 4) {
                numeral += small + mid;
            } else if (n === 5) {
                numeral += mid;
            } else if (n === 6) {
                numeral += mid + small;
            } else if (n === 7) {
                numeral += mid + small + small;
            } else if (n === 8) {
                numeral += mid + small + small + small;
            } else if (n === 9) {
                numeral += small + big;
            }
        }
    }

    return numeral;
}

const values = [
    163,
    575,
    3999,
];

for(let v of values) {
    console.log(`${v} => ${toRoman(v)}`);
}