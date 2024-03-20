using System;
using System.Linq;

public static class Pangram
{
    public static string LettersOnly(string input)
    {
        string output = "";
        foreach (char c in input.ToLower())
        {
            if (Char.IsLetter(c))
                output += c;
        }
        return output;
    }

    public static string RemoveDuplicates(string input)
    {
        return new string(input.ToCharArray().Distinct().ToArray());
    }

    public static string SortString(string input)
    {
        char[] arr = input.ToCharArray();
        Array.Sort(arr);
        return String.Join("", arr);
    }

    public static bool IsPangram(string input)
    {
        string output = LettersOnly(input);
        output = RemoveDuplicates(output);
        output = SortString(output);

        return (output == "abcdefghijklmnopqrstuvwxyz");
    }
}
