using System;
using System.Collections.Generic;
using System.Linq;

using _Helper;

public static class Minesweeper
{
    public static string[] Annotate(string[] input)
    {
        if (input.Length == 0)
            return Array.Empty<string>();

        else if (input[0] == "")
            return [""];

        var grid = Grid<string>.FromStringArray(input);

        var rows = new List<string>();

        for (var i = 0; i < grid.Size.Item1; i++)
        {
            var row = "";

            for (var j = 0; j < grid.Size.Item2; j++)
            {
                // If the space is a mine just return an asterisk
                if (grid.Cell(i, j) == "*")
                {
                    row += "*";
                }

                // Otherwise add a mine value or an empty space
                else
                {
                    var numMines = grid.GetNeighbors(i, j).Where(c => c.Value == "*").ToArray().Length;
                    row += numMines == 0 ? " " : numMines.ToString();
                }
            }

            rows.Add(row);
        }

        return rows.ToArray();
    }
}