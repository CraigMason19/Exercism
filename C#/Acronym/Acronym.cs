using System;
using System.Text.RegularExpressions;

public static class Acronym
{
    public static string Abbreviate(string phrase)
    {
        string pattern = @"([a-zA-Z])\w+|[A-Z]";
        var rg = new Regex(pattern);

        string result = "";

        foreach (Match match in rg.Matches(phrase))
        {
            result += match.Value[0];
        }

        return result.ToUpper();
    }
}