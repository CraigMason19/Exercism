string original = "The quick brown fox jumps over the lazy dog.";
string encoded = AtbashCipher.Encode(original);
string decoded = AtbashCipher.Decode(encoded);

Console.WriteLine($"original -> {original}");
Console.WriteLine($"encoded -> {encoded}");
Console.WriteLine($"decoded -> {decoded}");