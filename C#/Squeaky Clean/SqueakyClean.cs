using System;
using System.Text.RegularExpressions;

public static class Identifier
{
    public static string ConvertDashToCamelCase(string input) =>
        Regex.Replace(input, "-.", m => m.Value.ToUpper().Substring(1));

    public static string Clean(string identifier)
    {
        // 1
        string cleanStr = identifier.Replace(" ", "_");

        // 2
        cleanStr = cleanStr.Replace("\0", "CTRL");

        // 3
        cleanStr = ConvertDashToCamelCase(cleanStr);

        // 4
        string message = "";
        foreach (char c in cleanStr)
        {
            if (Char.IsLetter(c) || c == '_')
                message += c.ToString();
        }

        // 5 
        Regex rgx = new Regex("[α-ω]");
        cleanStr = rgx.Replace(message, "");


        return cleanStr;
    }
}
