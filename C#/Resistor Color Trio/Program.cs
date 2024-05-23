using System;
using System.Collections.Generic;

List<string[]> resistors = [
    ["orange", "orange", "black"],
    ["Yellow", "violet", "yellow"],
    ["red", "black", "red"],
    ["yellow", "violet", "yellow"],
];

foreach(var r in resistors)
{
    var label = ResistorColorTrio.Label(r);
    Console.WriteLine(label);
}