using System;
using System.Collections.Generic;

public static class TwelveDays
{
    static readonly Dictionary<int, string> _dayDict = new Dictionary<int, string>()
    {
        { 1, "first" },
        { 2, "second" },
        { 3, "third" },
        { 4, "fourth" },
        { 5, "fifth" },
        { 6, "sixth" },
        { 7, "seventh" },
        { 8, "eighth" },
        { 9, "ninth" },
        { 10, "tenth" },
        { 11, "eleventh" },
        { 12, "twelfth" },
    };

    static readonly Dictionary<int, string> _itemDict = new Dictionary<int, string>()
    {
        { 1, "a Partridge in a Pear Tree" },
        { 2, "two Turtle Doves" },
        { 3, "three French Hens" },
        { 4, "four Calling Birds" },
        { 5, "five Gold Rings" },
        { 6, "six Geese-a-Laying" },
        { 7, "seven Swans-a-Swimming" },
        { 8, "eight Maids-a-Milking" },
        { 9, "nine Ladies Dancing" },
        { 10, "ten Lords-a-Leaping" },
        { 11, "eleven Pipers Piping" },
        { 12, "twelve Drummers Drumming" },
    };

    public static string ConstructVerse(int verseNum)
    {
        List<string> presents = new List<string>();

        if (verseNum == 1)
        {
            presents.Add(_itemDict[verseNum]);
        }

        else
        {
            for (int i = 1; i <= verseNum; i++)
            {
                presents.Add(_itemDict[i]);
            }
            presents[0] = "and " + presents[0];
        }

        return $"On the {_dayDict[verseNum]} day of Christmas my true love gave to me: {String.Join(", ", presents.AsEnumerable().Reverse())}.";
    }

    public static string Recite(int verseNumber)
    {
        return ConstructVerse(verseNumber);
    }

    public static string Recite(int startVerse, int endVerse)
    {
        var lyrics = new List<string>();

        for (int i = startVerse; i <= endVerse; i++)
        {
            lyrics.Add(ConstructVerse(i));
        }

        return string.Join("\n", lyrics);
    }
}