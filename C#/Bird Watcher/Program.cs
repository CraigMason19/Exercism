using Bird_Watcher;

var bc = new BirdCount(new int[] { 1, 2, 1, 3, 1, 4, 1 });

Console.WriteLine(bc.Today());
Console.WriteLine(bc.HasDayWithoutBirds());