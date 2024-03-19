using System;
using System.Linq;

public static class ResistorColorDuo
{
    private static readonly string[] _colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    public static int Value(string[] colors)
    {
        int a = Array.IndexOf(_colors, colors[0]);
        int b = Array.IndexOf(_colors, colors[1]);

        return int.Parse($"{a}{b}");
    }
}