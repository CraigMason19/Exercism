using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Linq;

public static class ProteinTranslation
{
    static readonly Dictionary<string, string[]> PROTEINS = new Dictionary<string, string[]>
    {
        { "Methionine", new[] { "AUG" } },
        { "Phenylalanine", new[] { "UUU", "UUC" } },
        { "Leucine", new[] { "UUA", "UUG"} },
        { "Serine", new[] { "UCU", "UCC", "UCA", "UCG"} },
        { "Tyrosine", new[] { "UAU", "UAC"} },
        { "Cysteine", new[] { "UGU", "UGC"} },
        { "Tryptophan", new[] { "UGG"} },
        { "STOP", new[] { "UAA", "UAG", "UGA"} },
    };

    static string FindKeyFromValue(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return "";
        }

        foreach(KeyValuePair<string, string[]> entry in PROTEINS)
        {
            if(entry.Value.Contains(value))
            {
                return entry.Key;
            }
        }

        return "";
    } 

    public static string[] Proteins(string strand)
    {
        if(String.IsNullOrWhiteSpace(strand))
        {
            return [];
        }

        string pattern = @".{1,3}";
        var codons = Regex.Matches(strand.ToUpper(), pattern);

        List<string> proteins = [];

        foreach(Match c in codons)
        {
            var p = FindKeyFromValue(c.Value);

            if (p == "STOP")
            {
                return proteins.ToArray();
            }

            else if (p != "")
            {
                proteins.Add(p);
            }
        }

        return proteins.ToArray();
    }
}