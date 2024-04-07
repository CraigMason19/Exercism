using System;

public static class NthPrime
{
    public static bool IsPrime(int nth)
    {
        for (int i = 2; i <= Math.Sqrt(nth); i++)
        {
            if (nth % i == 0)
            {
                return false;
            }
        }

        return nth > 1;
    }

    public static int Prime(int nth)
    {
        if(nth == 0) { throw new ArgumentOutOfRangeException(); }

        int primeCounter = 0;
        int counter = 1;
        int answer = 0;

        while (primeCounter != nth)
        {
            if (IsPrime(++counter))
            {
                answer = counter;
                primeCounter++;
            }
        }

        return answer;
    }
}