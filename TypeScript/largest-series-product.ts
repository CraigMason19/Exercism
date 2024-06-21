import { isLetter } from "./helper/letters";

function product(numArray: number[]): number {
    return numArray.reduce((accumulator, currentValue) => {
        return accumulator * currentValue
    }, 1);
}

export const largestProduct = (series: string, span: number): number => {
    if(span > series.length) {
        throw new Error('Span must be smaller than string length');
    }

    if(span < 0) {
        throw new Error('Span must not be negative');
    }

    if(series.split("").some(x => isLetter(x))) {
        throw new Error('Digits input must only contain digits')
    }

    let indices = Array.from({ length: span }, (_, i) => i);
    let maxValue = 0;

    for(let i = 0; i < series.length+1 - span; i++) {
        let substr = series.slice(i, i + span);
        let result = product(Array.from(substr, Number));

        maxValue = Math.max(maxValue, result);
    
        indices = indices.map(index => index + 1);
    }

    return maxValue;
}

console.log(largestProduct("123456789", 3)); // 504
console.log(largestProduct("123456789", 4)); // 3024
console.log(largestProduct("123456789", 5)); // 15120