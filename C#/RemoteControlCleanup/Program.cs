var car = new RemoteControlCar();
car.Telemetry.Calibrate();
car.Telemetry.SelfTest();
car.Telemetry.ShowSponsor("Walker Industries Inc.");
car.Telemetry.SetSpeed(100, "cps");

Console.WriteLine(car.CurrentSponsor);
Console.WriteLine(car.GetSpeed());