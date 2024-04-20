using System;

var buffer = new CircularBuffer<int>(3);
buffer.Write(0);
buffer.Write(4);
buffer.Write(3);

Console.WriteLine(buffer.Read()); // 1;

buffer.Write(4);
buffer.Overwrite(5);

Console.WriteLine(buffer.Read()); // 3
Console.WriteLine(buffer.Read()); // 4
Console.WriteLine(buffer.Read()); // 5

Console.WriteLine(buffer.Count);  // 0