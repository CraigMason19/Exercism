using System;
using _Helper;

//var minefield = new[]
//{
//    "  *  ",
//    "  *  ",
//    "*****",
//    "  *  ",
//    "  *  "
//};

var minefield = new[]
        {
            " * * "
        };

foreach (var row in Minesweeper.Annotate(minefield))
{
    Console.WriteLine(row);
}