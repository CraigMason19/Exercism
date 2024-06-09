using System;
using System.Collections.Generic;

public static class PascalsTriangle
{
    public static IEnumerable<IEnumerable<int>> Calculate(int rows)
    {
        if (rows <= 0) yield break;

        List<int> currentRow = new List<int> { 1 };
        yield return currentRow;

        for (int i = 1; i < rows; i++)
        {
            List<int> nextRow = new List<int> { 1 };

            for (int j = 0; j < currentRow.Count - 1; j++)
            {
                nextRow.Add(currentRow[j] + currentRow[j + 1]);
            }

            nextRow.Add(1);
            yield return nextRow;
            currentRow = nextRow;
        }
    }
}