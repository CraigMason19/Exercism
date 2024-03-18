var a = new Anagram("solemn");
var candidates = new[] { "lemons", "cherry", "melons" };

var anagrams = a.FindAnagrams(candidates);

Console.WriteLine("[{0}]", string.Join(", ", anagrams));