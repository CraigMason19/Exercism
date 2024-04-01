var counter = 0;
var accumulation = new[]
{
    1,
    2,
    3,
}.Accumulate(x => x * counter++);

Console.WriteLine(counter);
accumulation.ToList();
Console.WriteLine(counter);