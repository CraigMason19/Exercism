import { eratosthenes } from "./helper/primes";

export const primes = (n: number): number[] => {
    return eratosthenes(n);
};

console.log(primes(20));