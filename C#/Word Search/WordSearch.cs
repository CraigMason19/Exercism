using System;
using System.Collections.Generic;
using System.Linq;
using _Helper;

public class WordSearch
{
    public Grid<char> grid;

    public WordSearch(string grid)
    {
        string[] rows = grid.Split('\n');

        char[][] gridArray = new char[rows.Length][];

        for (int i = 0; i < rows.Length; i++)
        {
            gridArray[i] = rows[i].ToCharArray();
        }

        this.grid = _Helper.Grid<char>.FromData(gridArray);
    }

    public Dictionary<string, ((int, int), (int, int))?> Search(string[] wordsToSearchFor)
    {
        var results = new Dictionary<string, ((int, int), (int, int))?>();
        foreach (var language in wordsToSearchFor)
        {
            results.Add(language.ToLower(), null);
        }

        // Search each letter in the grid for each language in the list
        this.grid.ForEach((value, row, col) =>
        {
            foreach (var word in wordsToSearchFor)
            {
                var language = word.ToLower();
                
                // All directions longer or equal to word
                var lines = this.grid.CardinalsAndOrdinals(row, col).Where(x => x.Values.Length >= language.Length).ToArray();

                foreach (var line in lines)
                {
                    var potential = string.Join("", line.Values).Substring(0, language.Length);

                    if(language == potential)
                    {
                        var offset = Offsets.OffsetDictionary[line.Direction];

                        int endRow = row + (offset.X * (language.Length - 1));
                        int endCol = col + (offset.Y * (language.Length - 1));

                        // C# exercism solution wants the inverse row - column co-ordinates
                        results[language] = ((col + 1, row + 1), (endCol + 1, endRow + 1));

                    }
                }
            }
        });

        return results;
    }
}