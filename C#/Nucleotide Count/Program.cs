using System;
using System.Linq;
using System.Text;

string StringifyDictionary(IDictionary<char, int> dictionary)
{
    var str = new List<string>();

    foreach (var count in dictionary)
    {
        str.Add($"{count.Key}:{count.Value}");
    }

    return String.Join(" ", str);
}

var input = "";
Console.WriteLine($"{input} -> {StringifyDictionary(NucleotideCount.Count(input))}");

input = "GATTACA";
Console.WriteLine($"{input} -> {StringifyDictionary(NucleotideCount.Count(input))}");

//input = "INVALID";
//Console.WriteLine($"{input} -> {StringifyDictionary(NucleotideCount.Count(input))}"); // Throws Error