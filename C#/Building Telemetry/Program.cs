using System.Data;

var car = RemoteControlCar.Buy();
car.SetSponsors("Exercism", "Walker Industries", "Acme Co.");

Console.WriteLine(car.DisplaySponsor(sponsorNum: 1)); // => "Walker Industries"

car.Drive();
car.Drive();
var tc = new TelemetryClient(car);
int serialNum = 4;
Console.WriteLine(tc.GetBatteryUsagePerMeter(serialNum)); // => "usage-per-meter=5"

serialNum = 1;
Console.WriteLine(tc.GetBatteryUsagePerMeter(serialNum)); // => "no data"