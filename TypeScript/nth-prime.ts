import { isPrime } from "./helper/primes";

export const nth = (n: number): number => {
    if(n === 0) {
        throw new Error("Prime is not possible");
    }

    let primeCounter = 0;
    let counter = 1;
    let answer = 0;
    
    while(primeCounter != n) {        
        if(isPrime(++counter)) {
            answer = counter;
            primeCounter++;
        }            
    }

    return answer;
};
  
const n = 10001;

console.log(`n=${n} -> prime=${nth(n)}`);