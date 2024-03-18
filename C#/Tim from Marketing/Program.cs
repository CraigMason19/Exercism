using System;

var message = Badge.Print(734, "Ernest Johnny Payne", "Strategic Communication");
Console.WriteLine(message);

message = Badge.Print(id: null, "Jane Johnson", "Procurement");
Console.WriteLine(message);

message = Badge.Print(id: null, "Charlotte Hale", department: null);
Console.WriteLine(message);