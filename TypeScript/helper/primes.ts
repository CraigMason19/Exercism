export const isPrime = (num: number): boolean => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

export const eratosthenes = (n: number): number[] => {
    if(n < 2) {
        return [];
    }

    // Keep 0 & 1 for easy indexing
    var numbers = [0, 0];

    for(let i = 2; i < n+1; i++) {
        numbers.push(i);
    }

    for(let i = 2; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            continue;
        }

        for(var j = numbers[i] * numbers[i]; j <= n; j += numbers[i]) {
            numbers[j] = 0;
        }
    }

    return numbers.filter(num => num !== 0);
};

// Co-Prime OR relatively prime
export const areCoPrime = (a: number, b: number): boolean => {
    const smallest = a > b ? a : b;

    for(let i = 2; i < smallest; i++) {
       const condition1 = a % i === 0;
       const condition2 = b % i === 0;

       if(condition1 && condition2) {
          return false;
       };
    };

    return true;
};