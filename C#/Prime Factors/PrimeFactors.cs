using System;
using System.Collections.Generic;

public static class PrimeFactors
{
    public static long[] Factors(long number)
    { 
        var pf = new List<long>();
        var d = 2L;

        while(number > 1) {
            while(number % d == 0) {
                pf.Add(d);
                number = (long)number / d;
            }

            d += 1;
        }

        return pf.ToArray();
    }
}