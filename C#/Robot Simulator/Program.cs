using System;

var r = new RobotSimulator(Direction.North, 7, 3);

Console.WriteLine($"x:{r.X} y:{r.Y} direction:{r.Direction}");

r.Move("RAALAL");

Console.WriteLine($"x:{r.X} y:{r.Y} direction:{r.Direction}");