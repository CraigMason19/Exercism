using System;
using System.Collections.Generic;
using System.Linq;

public static class Sieve
{
    public static int[] Primes(int limit)
    {
        if (limit < 0)
        {
            throw new ArgumentOutOfRangeException();
        }
        if(limit < 2)
        {
            return [];
        }

        // Keep 0 & 1 for easy indexing
        List<int> numbers = new List<int>([0,0]);

        for (int i = 2; i < limit + 1; i++)
        {
            numbers.Add(i);
        }

        for (int i = 2; i < numbers.Count; i++)
        {
            if (numbers[i] == 0)
            {
                continue;
            }

            for (var j = numbers[i] * numbers[i]; j <= limit; j += numbers[i])
            {
                numbers[j] = 0;
            }
        }

        return numbers.Where(n => n != 0).ToArray();
    }
}