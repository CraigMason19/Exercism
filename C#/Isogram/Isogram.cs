using System;
using System.Collections;
using System.Linq;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {
        string letters = new string(word.ToLower().Where(Char.IsLetter).ToArray());

        return letters.ToHashSet().Count == letters.Length;
    }
}