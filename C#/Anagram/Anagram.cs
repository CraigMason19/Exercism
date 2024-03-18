using System.Linq;
using System.Collections.Generic;

public class Anagram
{
    private string _baseWord;

    public Anagram(string baseWord)
    {
        _baseWord = baseWord;
    }

    private static string SortedString(string s)
    {
        return string.Join("", s.OrderBy(x => x).ToArray());
    }

    public string[] FindAnagrams(string[] potentialMatches)
    {
        List<string> matches = new();

        foreach (var potential in potentialMatches)
        {
            // Can't be an anagram if it already matches
            if(potential.ToLower() == _baseWord.ToLower())
            {
                continue;
            }

            else if (SortedString(potential.ToLower()) == SortedString(_baseWord.ToLower()))
            {
                matches.Add(potential);
            }
        }

        return matches.ToArray();
    }
}
