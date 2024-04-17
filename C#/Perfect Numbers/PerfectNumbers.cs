using System;
using System.Collections.Generic;
using System.Linq;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    static List<int> Factors(int n)
    {
        List<int> factors = [];

        for (int i = 1; i < n; i++)
        {
            if (n % i == 0)
            {
                factors.Add(i);
            }
        }

        return factors;
    }

    public static Classification Classify(int number)
    {
        if (number <= 0)
        {
            throw new ArgumentOutOfRangeException("Classification is only possible for natural numbers.");
        }

        var factorsSum = Factors(number).Sum();

        if(factorsSum == number)
        {
            return Classification.Perfect;
        }
        else if(factorsSum > number)
        {
            return Classification.Abundant;
        }

        return Classification.Deficient;
    }
}