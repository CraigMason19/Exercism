var phrase = "The quick brown fox jumps over the lazy dog.";
var phrase_rot13 = "Gur dhvpx oebja sbk whzcf bire gur ynml qbt.";

var encodedPhrase = RotationalCipher.Rotate(phrase, 13);

Console.WriteLine($"Orginal: {phrase}");
Console.WriteLine($"Answer: {phrase_rot13}");
Console.WriteLine($"MyCode: {encodedPhrase}");
Console.WriteLine(encodedPhrase == phrase_rot13);