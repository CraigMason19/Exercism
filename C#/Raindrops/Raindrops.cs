using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
        var pling = number % 3 == 0 ? "Pling" : "";
        var plang = number % 5 == 0 ? "Plang" : "";
        var plong = number % 7 == 0 ? "Plong" : "";

        var result = pling + plang + plong;

        return string.IsNullOrEmpty(result) ? number.ToString() : $"{result}";     
    }
}