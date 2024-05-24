using System;
using System.Collections.Generic;

public static class BeerSong
{
    public static string Verse(int number)
    {
        if(number == 0) {
            return "No more bottles of beer on the wall, no more bottles of beer.\n" +
                   "Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
        else if(number == 1) {
            return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                   "Take it down and pass it around, no more bottles of beer on the wall.";
        }

        string bottlesBelow = (number - 1 == 1) ? "1 bottle" : $"{number - 1} bottles";

        return $"{number} bottles of beer on the wall, {number} bottles of beer.\n" +
               $"Take one down and pass it around, {bottlesBelow} of beer on the wall.";
    }

    public static string Recite(int startBottles, int takeDown=0)
    {
        if (startBottles == 0)
        {
            return Verse(0);
        }

        List<string> output = new List<string>();

        for (int i = startBottles; i > startBottles - takeDown; i--)
        {
            output.Add(Verse(i));
        }

        return string.Join("\n\n", output);
    }
}