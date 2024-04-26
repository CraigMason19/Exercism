const factors = (n:number) :number[] => {
    let factors = [];

    for (let i = 1; i < n; i++) {
        if(n % i == 0) {
            factors.push(i);
        }
    }

    return factors;
};

function add(accumulator:number, a:number) :number {
    return accumulator + a;
};

export const classify = (n: number): string => {
    if(n <= 0) {
        throw new Error('Classification is only possible for natural numbers.')
    }

    let f = factors(n);
    let s = f.reduce(add, 0);

    if(s === n) {
        return 'perfect';
    }

    else if(s > n) {
        return 'abundant';
    }

    //else if(s < n)
    return 'deficient';
};

const numbers = [
    28,
    12,
    33550335,
    32,
]

numbers.forEach(n => {
    console.log(`${n} -> ${classify(n)}`);
});