using System;
using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static List<int> Multiples(int n, int limit)
    {
        var output = new List<int>();

        for (int i = n; i < limit; i++)
        {
            if (i % n == 0)
            {
                output.Add(i);
            }
        }

        return output;
    }

    public static int Sum(IEnumerable<int> multiples, int max)
    {
        var hs = new HashSet<int>();

        foreach (var item in multiples)
        {
            if (item != 0)
            {
                List<int> numbers = Multiples(item, max);
                foreach (var number in numbers)
                {
                    hs.Add(number);
                }
            }
        }

        return hs.Sum();
    }
}