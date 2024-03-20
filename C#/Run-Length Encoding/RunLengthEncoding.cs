using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class RunLengthEncoding
{
    public static string Encode(string input)
    {
        var pattern = @"(.)\1*";
        Regex r = new Regex(pattern);

        string output = "";

        foreach(Match match in r.Matches(input))
        {
            if (match.Value.Length == 1)
            {
                output += $"{match.Value.First()}";
            }
            else
            {
                output += $"{match.Value.Length}{match.Value.First()}";
            }
        }

        return output;
    }

    public static string Decode(string input)
    {
        var pattern = @"(\d+.|.)\1*";
        Regex r = new Regex(pattern);      

        string output = "";

        foreach (Match match in r.Matches(input))
        {
            if(match.Value.Length == 1) 
            {
                output += match.Value.ToString();
            }
            else
            {
                // The end of the string is a letter and everything else is a number
                // 22B for example
                int count = Int32.Parse(match.Value.Substring(0, match.Value.Length-1));
                output += new string(match.Value.Last(), count);
            }
        }

        return output;
    }
}