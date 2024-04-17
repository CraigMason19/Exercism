using System;
using System.Collections.Generic;
using System.Linq;

public class Matrix
{
    List<List<int>> _data = new List<List<int>>();
    (int, int) _size;

    public Matrix(string input)
    {
        var rows = input.Split('\n');

        foreach (var row in rows)
        {
            var r = row.Split(" ").Select(int.Parse).ToList();
            _data.Add(r);
        }

        _size = (_data[0].Count, _data.Count);
    }

    public int[] Row(int row)
    {
        return _data[row-1].ToArray();
    }

    public int[] Column(int col)
    {
        return _data.Select(row => row[col - 1]).ToArray();
    }
}