using System;
using System.Collections.Generic;
using System.Xml.Linq;

var input = new List<string>()
{
    "G",
    "C",
    "T",
    "A",
    "ACGTGGTCTTAA",
};

foreach (var item in input)
{
    Console.WriteLine($"{item} -> {RnaTranscription.ToRna(item)}");
}