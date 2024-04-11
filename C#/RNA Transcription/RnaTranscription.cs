using System;
using System.Collections.Generic;
using System.Linq;

public static class RnaTranscription
{
    public readonly static Dictionary<char, char> DNA_RNA_MAP = new Dictionary<char, char>()
    {
        { 'G', 'C' },
        { 'C', 'G' },
        { 'T', 'A' },
        { 'A', 'U' },
    };

    public static string ToRna(string nucleotide)
    {
        var x = new List<char>(nucleotide).Select(c => DNA_RNA_MAP[c]);
        return string.Join("", x.ToArray());
    }
}