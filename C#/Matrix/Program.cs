var sut = new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6");

for (int i = 1; i < 4+1; i++)
{
    Console.WriteLine(string.Join(" ", sut.Row(i)));
}

Console.WriteLine("\n");
Console.WriteLine("Row 4: " + string.Join(" ", sut.Row(4)));
Console.WriteLine("Col 2: " + string.Join(" ", sut.Column(2)));