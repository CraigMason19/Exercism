using System;
using System.Collections.Generic;
using System.Linq;

using _Helper;

public static class Diamond
{
    public static string MirrorLine(string line, char mirrorChar)
    {
        return $"{line}{mirrorChar.ToString()}{new String(line.Reverse().ToArray())}";
    }

    public static string Make(char target)
    {
        int letterIndex = Letters.PositionFromLetter(target);
        char emptyChar = ' ';

        List<string> lines = new List<string>() 
        { 
            MirrorLine($"{new string(emptyChar, letterIndex - 1)}", 'A') 
        };

        for (int i = 1; i < letterIndex; i++)
        {
            string str = $"{new string(emptyChar, letterIndex - 1 - i)}{Letters.LetterFromIndex(i, true)}".PadRight(letterIndex - 1, emptyChar);
            lines.Add(MirrorLine(str, emptyChar));
        }

        // Construct the bottom of the Diamond
        lines.AddRange(lines.AsEnumerable().Reverse().Skip(1).ToArray());

        return string.Join("\n", lines);
    }
}