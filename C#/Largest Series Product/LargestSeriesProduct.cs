using System;
using System.Collections.Generic;
using System.Linq;

public static class LargestSeriesProduct
{
    private static int Product(int[] numArray)
    {
        return numArray.Aggregate(1, (accumaltor, x) => accumaltor * x);
    }

    public static long GetLargestProduct(string digits, int span)
    {
        if (span > digits.Length)
        {
            throw new ArgumentException("Span must be smaller than string length");
        }

        if (span < 0)
        {
            throw new ArgumentException("Span must be greater than zero");
        }

        if (digits.Any(x => char.IsLetter(x)))
        {
            throw new ArgumentException("Digits input must only contain digits");
        }

        var indices = Enumerable.Range(0, span).ToList();   
        int maxValue = 0;

        for (int i = 0; i < digits.Length + 1 - span; i++)
        {
            string substr = digits.Substring(i, span);
            int result = Product(substr.Select(x => Convert.ToInt32(x.ToString())).ToArray());
            substr.Select(x => Convert.ToInt32(x.ToString())).ToArray();

            maxValue = Math.Max(maxValue, result);

            indices = indices.Select(index => index + 1).ToList();
        }

        return maxValue;
    }
}