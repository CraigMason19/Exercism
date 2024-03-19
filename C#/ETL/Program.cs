using System.Collections;
using System.Collections.Generic;

var oneToMany = new Dictionary<int, string[]>
{
    { 1, ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] },
    { 2, ["D", "G"] },
    { 3, ["B", "C", "M", "P"] },
    { 4, ["F", "H", "V", "W", "Y"] },
    { 5, ["K"] },
    { 8, ["J", "X"] },
    { 10, ["Q", "Z"] },
};

var manyToOne = Etl.Transform(oneToMany);

foreach (KeyValuePair<string, int> kvp in manyToOne)
{
    Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
}