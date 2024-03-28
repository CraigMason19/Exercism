var car = RemoteControlCar.Buy();

Console.WriteLine($"{car.DistanceDisplay()} ${car.BatteryDisplay()}");

for (int i = 0; i < 10; i++)
{
    car.Drive();
}

Console.WriteLine($"{car.DistanceDisplay()} ${car.BatteryDisplay()}");