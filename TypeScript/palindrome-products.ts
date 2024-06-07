interface Input {
    maxFactor: number;
    minFactor?: number;
}

type Factors = [number, number];

interface Palindrome {
    value: number | null;
    factors: Factors[];
}

interface Output {
    largest: Palindrome;
    smallest: Palindrome;
}

function isPalindrome(n: number): boolean { 
    for (let i = 0; i < n.toString().length / 2; i++) {
        if (n.toString()[i] !== n.toString()[n.toString().length - i - 1]) {
            return false
        }
    } 

    return true;
}

export function generate(params: Input): Output {
    const { maxFactor, minFactor = 1 } = params;

    if (minFactor > maxFactor) {
        throw new Error('min must be <= max');
    }

    let maxPalindrome = 0;
    let minPalindrome = Infinity;
    let maxFactors: Factors[] = [];
    let minFactors: Factors[] = [];

    for (let i = minFactor; i <= maxFactor; i++) {
        for (let j = i; j <= maxFactor; j++) {
            const product = i * j;

            if (isPalindrome(product)) {
                const factors: Factors = [i, j];

                // Max
                if (product > maxPalindrome) {
                    maxPalindrome = product;
                    maxFactors = [factors];
                } 
                else if (product === maxPalindrome) {
                    maxFactors.push(factors);
                }
                // Min
                if (product < minPalindrome) {
                    minPalindrome = product;
                    minFactors = [factors];
                } 
                else if (product === minPalindrome) {
                    minFactors.push(factors);
                }
            }
        }
    }

    const empty: Palindrome = { value: null, factors: [] };

    const largest: Palindrome = maxFactors.length > 0 ? { value: maxPalindrome, factors: maxFactors } : empty;
    const smallest: Palindrome = minFactors.length > 0 ? { value: minPalindrome, factors: minFactors } : empty;

    return { largest, smallest };
}

const result = generate({ minFactor:10, maxFactor:90 });
console.log(result);
console.log(result.smallest);
console.log(result.largest);