string[] isbns = new string[] {
    "3-598-21508-8",
    "3-598-21507-X",
    "3598P215088",
    "3-598-21508-8",
    "3-598-2X507-9",
};

foreach(var isbn in isbns)
{
    Console.WriteLine($"{isbn} IsValid? {IsbnVerifier.IsValid(isbn)}");
}