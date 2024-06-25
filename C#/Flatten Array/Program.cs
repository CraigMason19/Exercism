using System;
using System.Linq;

var input = new object[] { 1, new object[] { 2, 3, null, 4 }, new object[] { null }, 5 };
var flattenedArray = FlattenArray.Flatten(input).Cast<object>().ToArray();

Console.WriteLine($"[{string.Join(", ", flattenedArray)}]" );