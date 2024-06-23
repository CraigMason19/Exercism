using System;

int[] values = new int[] {
    163,
    575,
    3999,
};

foreach(var v in values)
{
    Console.WriteLine($"{v} => {v.ToRoman()}");
}