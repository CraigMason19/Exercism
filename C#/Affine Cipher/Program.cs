// See https://aka.ms/new-console-template 
using System;

string phrase = "The quick brown fox jumps over the lazy dog.";
string encoded = AffineCipher.Encode(phrase, 19, 13);
string decoded = AffineCipher.Decode(encoded, 19, 13);

Console.WriteLine(phrase);
Console.WriteLine(encoded);
Console.WriteLine(decoded);