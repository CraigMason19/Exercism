using System;
using System.Collections.Generic;
using System.Linq;

public record ChainItem(string Thing, string Action);

public static class House
{
    private static readonly List<ChainItem> chain = new List<ChainItem>
    {
        new ChainItem("the house that Jack built.", ""),
        new ChainItem("the malt", "lay in"),
        new ChainItem("the rat", "ate"),
        new ChainItem("the cat", "killed"),
        new ChainItem("the dog", "worried"),
        new ChainItem("the cow with the crumpled horn", "tossed"),
        new ChainItem("the maiden all forlorn", "milked"),
        new ChainItem("the man all tattered and torn", "kissed"),
        new ChainItem("the priest all shaven and shorn", "married"),
        new ChainItem("the rooster that crowed in the morn", "woke"),
        new ChainItem("the farmer sowing his corn", "kept"),
        new ChainItem("the horse and the hound and the horn", "belonged to")
    };

    public static string Recite(int verseNumber)
    {
        var lines = new List<string> { $"This is {chain[verseNumber - 1].Thing}" };

        for (int i = 1; i < verseNumber; i++)
        {
            lines.Add($"that {chain[verseNumber - i].Action} {chain[verseNumber - i - 1].Thing}");
        }

        return string.Join(" ", lines);
    }

    public static string Recite(int startVerse, int endVerse)
    {
        var lines = new List<string>();

        for (int i = startVerse; i <= endVerse; i++)
        {
            lines.Add(Recite(i));
        }

        return string.Join("\n", lines);
    }
}