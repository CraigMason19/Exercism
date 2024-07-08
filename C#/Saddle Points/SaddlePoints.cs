using System;
using System.Collections.Generic;
using System.Linq;

using _Helper;

public static class SaddlePoints
{
    public static T[][] ToJaggedArray<T>(T[,] data)
    {
        int rows = data.GetLength(0);
        int cols = data.GetLength(1);

        T[][] jaggedArray = new T[rows][];

        for (int i = 0; i < rows; i++)
        {
            jaggedArray[i] = new T[cols];
            for (int j = 0; j < cols; j++)
            {
                jaggedArray[i][j] = data[i, j];
            }
        }

        return jaggedArray;
    }

    public static IEnumerable<(int, int)> Calculate(int[,] matrix)
    {
        if(matrix.Length == 0)
        {
            return Enumerable.Empty<(int, int)> ();
        }

        var trees = new List<(int, int)>();

        var g = Grid<int>.FromData(SaddlePoints.ToJaggedArray(matrix));


        g.ForEach((value, row, col) =>
        {
            bool largestInRow = value == g.Row(row).Max();
            bool smallestInColumn = value == g.Column(col).Min();

            if (largestInRow && smallestInColumn)
            {
                trees.Add((row + 1, col + 1));
            }
        });

        return trees;
    }
}