string[] phrases = ["Five quacking Zephyrs jolt my wax bed.",
    "abcdefghijklm ABCDEFGHIJKLM"];

foreach (string phrase in phrases)
{
    Console.WriteLine($"{phrase} -> {Pangram.IsPangram(phrase)}");
}