using System;

var strings = new[]
{
    "nail",
    "shoe",
    "horse",
    "rider",
    "message",
    "battle",
    "kingdom"
};

Console.WriteLine(string.Join("\n", Proverb.Recite(strings)));