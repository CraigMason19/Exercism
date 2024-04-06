const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const prime = (n) => {
    if(n === 0) {
        throw new Error('there is no zeroth prime');
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

console.log(`n=${n} -> prime=${prime(n)}`);