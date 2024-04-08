using System;
using System.Reflection.Metadata.Ecma335;

//const eratosthenes = (n) => {
//    if (n < 2)
//    {
//        return [];
//    }

//    // Keep 0 & 1 for easy indexing
//    var numbers = [0, 0];

//    for (let i = 2; i < n + 1; i++)
//    {
//        numbers.push(i);
//    }

//    for (let i = 2; i < numbers.length; i++)
//    {
//        if (numbers[i] === 0)
//        {
//            continue;
//        }

//        for (var j = numbers[i] * numbers[i]; j <= n; j += numbers[i])
//        {
//            numbers[j] = 0;
//        }
//    }

//    return numbers.filter(num => num !== 0);
//};

//module.exports = { eratosthenes };

public static class Sieve
{
    public static int[] Primes(int limit)
    {
        limit switch
        {
            limit < 2 => return new int[],
            limit 
        };
    }
}