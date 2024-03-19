using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Response(string statement)
    {
        string s = statement.Trim();

        string pattern = @"(\\[ntr])|\s{3,}";
        var rg = new Regex(pattern);

        // Deal with Whitespaces 
        if (rg.IsMatch(s) || s == "") 
        {
            return "Fine. Be that way!";
        }

        // Lowercase all the anocronyms in the string
        string[] anocronyms = ["OK", "DMV", "NASA"];
        string newMessage = s;

        foreach(var a in anocronyms) 
        {
            newMessage = newMessage.Replace(a, a.ToLower());
        }

        // Capital letters with question mark
        pattern = @"[A-Z]+[?]$";
        rg = new Regex(pattern);

        if (rg.IsMatch(newMessage))
        { 
            return "Calm down, I know what I'm doing!";
        }

        // Capital letters
        pattern = @"[A-Z]{2,}";
        rg = new Regex(pattern);

        if (rg.IsMatch(newMessage)) 
        {
            return "Whoa, chill out!";
        }

        // Ends in a question mark
        pattern = @"\?$";
        rg = new Regex(pattern);
 
        if (rg.IsMatch(newMessage))
        {
            return "Sure.";
        }


        return "Whatever.";
    }
}