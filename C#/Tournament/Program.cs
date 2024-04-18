using System;
using System.IO;
using System.Text;

var input =
    "Courageous Californians;Devastating Donkeys;win\n" +
    "Allegoric Alaskans;Blithering Badgers;win\n" +
    "Devastating Donkeys;Allegoric Alaskans;loss\n" +
    "Courageous Californians;Blithering Badgers;win\n" +
    "Blithering Badgers;Devastating Donkeys;draw\n" +
    "Allegoric Alaskans;Courageous Californians;draw";

var expected =
    "Team                           | MP |  W |  D |  L |  P\n" +
    "Allegoric Alaskans             |  3 |  2 |  1 |  0 |  7\n" +
    "Courageous Californians        |  3 |  2 |  1 |  0 |  7\n" +
    "Blithering Badgers             |  3 |  0 |  1 |  2 |  1\n" +
    "Devastating Donkeys            |  3 |  0 |  1 |  2 |  1";

var inputStream = new MemoryStream(Encoding.UTF8.GetBytes(input));
var outputStream = new MemoryStream();

Tournament.Tally(inputStream, outputStream);

string outputString = Encoding.UTF8.GetString(outputStream.ToArray());

Console.WriteLine("Expected");
Console.WriteLine(expected);

Console.WriteLine("\nOutput");
Console.WriteLine(outputString);