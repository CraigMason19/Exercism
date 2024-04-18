using System;
using System.Collections.Generic;
using System.Linq;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        if(numbers.Length <= 0)
        {
            throw new ArgumentException("Numbers can't be 0 or less");
        }
         
        if (sliceLength < 0)
        {
            throw new ArgumentException("slice length cannot be negative");
        }

        else if (sliceLength == 0)
        {
            throw new ArgumentException("slice length cannot be zero");
        }

        else if (sliceLength > numbers.Length)
        {
            throw new ArgumentException("slice length cannot be greater than series length");
        }

        int start = 0;
        int end = sliceLength;

        var arr = new List<string>();

        while (end <= numbers.Length)
        {
            var sub = numbers.Substring(start, sliceLength).Split("").Select(c => c);
            arr.Add(string.Join("", sub));

            start++;
            end++;
        }

        return arr.ToArray();
    }
}