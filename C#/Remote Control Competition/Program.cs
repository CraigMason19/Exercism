using System;
using System.Linq;

var prc1 = new ProductionRemoteControlCar();
var prc2 = new ProductionRemoteControlCar();

prc1.NumberOfVictories = 7;
prc2.NumberOfVictories = 3;

var rankings = TestTrack.GetRankedCars(prc1, prc2);

Console.WriteLine($"Highest number victories: {rankings.Last().NumberOfVictories}");