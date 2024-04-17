using System;
using System.Linq;
using System.Globalization;

public static class HighSchoolSweethearts
{
    public static string DisplaySingleLine(string studentA, string studentB)
    {
        // 1 for the heart and 2 spaces each side of it
        const int l = (61 - 3) / 2;

        return $"{studentA,l} ♡ {studentB,-l}";
    }

    public static string DisplayBanner(string studentA, string studentB)
    {
        var initials = (studentA + studentB).Where(char.IsAsciiLetterUpper).ToArray();

        var asciiHeart = String.Format(@"     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     {0}. {1}.  +  {2}. {3}.     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *", initials[0], initials[1], initials[2], initials[3]);

        return asciiHeart;
    }

    public static string DisplayGermanExchangeStudents(string studentA
        , string studentB, DateTime start, float hours)
    {
        var x = start.GetDateTimeFormats();
        return $"{studentA} and {studentB} have been dating since {start.ToString("dd.MM.yyyy")} - that's {hours.ToString("N2", CultureInfo.GetCultureInfo("de-DE"))} hours";
    }
}