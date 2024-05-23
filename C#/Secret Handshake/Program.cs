using System;
using System.Collections.Generic;
using System.Linq;

var codes = new List<int>()
{
    1,
    9,
    23,
    31,
};

foreach(var code in codes)
{
    var actions = SecretHandshake.Commands(code);
    Console.WriteLine(string.Join(", ", actions));
}