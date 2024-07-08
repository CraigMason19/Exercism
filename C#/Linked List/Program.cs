using System;

var list = new Deque<int>();
list.Push(10);
list.Push(20);
list.Push(30);
list.Push(40);
list.Push(50);

foreach (var item in list.TraverseForwards())
{
    Console.WriteLine(item);
}