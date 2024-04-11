using System;
using System.Collections.Generic;
using System.Linq;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        var d = new Dictionary<char, int>()
        {
            { 'A', 0 },
            { 'C', 0 },
            { 'G', 0 },
            { 'T', 0 },
        };

        foreach (char c in sequence)
        {
            if (!d.ContainsKey(char.ToUpper(c)))
            {
                throw new ArgumentException("Invalid nucleotide in strand");
            }

            d[char.ToUpper(c)]++;
        }

        return d;        
    }
}