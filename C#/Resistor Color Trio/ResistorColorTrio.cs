using System;
using System.Linq;

public static class ResistorColorTrio
{
    public static readonly string[] Colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    public static string Label(string[] colors)
    {
        colors = colors.Select(c => c.ToLower()).ToArray();

        var indices = colors.Select(c => Array.IndexOf(Colors, c)).ToArray();

        // 'Pretify' the label
        int n = Convert.ToInt32(indices[0].ToString() + indices[1].ToString() + string.Concat(Enumerable.Repeat('0', indices[2])));
        string numString = "";

        if (n >= 1e9)
        {
            numString = $"{(n / 1e9).ToString("0")} gigaohms";
        }
        else if (n >= 1e6)
        {
            numString = $"{(n / 1e6).ToString("0")} megaohms";
        }
        else if (n >= 1e3)
        {
            numString = $"{(n / 1e3).ToString("0")} kiloohms";
        }
        else
        {
            numString = $"{n} ohms";
        }

        return numString;
    }
}