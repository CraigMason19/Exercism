using _Helper;
using System;
using System.Collections.Generic;

public static class QueenAttack
{
    public static bool CanAttack(Queen white, Queen black)
    {
        var board = new _Helper.Grid<char>(8, 8, '_');

        board.FillCell(white.Row, white.Column, 'W');
        board.FillCell(black.Row, black.Column, 'B');

        Console.WriteLine(board.ToString());

        var possibleCells = new List<char>();

        possibleCells.AddRange(board.Cardinals(white.Row, white.Column));
        possibleCells.AddRange(board.Ordinals(white.Row, white.Column));

        return possibleCells.Contains('B');
    }

    public static Queen Create(int row, int column)
    {
        if (row < 0 || row > 7 || column < 0 || column > 7)
        {
            throw new ArgumentOutOfRangeException("Queen position has to be between 0-7 inclusive.");
        }

        return new Queen(row, column);
    }
}