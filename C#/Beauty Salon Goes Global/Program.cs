Console.WriteLine("Schedule appoitments");

var a = Appointment.Schedule("7/25/2019 08:45:00", Location.NewYork);
var b = Appointment.Schedule("7/25/2019 13:45:00", Location.London);
var c = Appointment.Schedule("7/25/2019 14:45:00", Location.Paris);

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);

Console.WriteLine("Alert times");

a = Appointment.GetAlertTime(new DateTime(2019, 7, 25, 16, 0, 0), AlertLevel.Early);
b = Appointment.GetAlertTime(new DateTime(2019, 7, 25, 16, 0, 0), AlertLevel.Standard);
c = Appointment.GetAlertTime(new DateTime(2019, 7, 25, 16, 0, 0), AlertLevel.Late);

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);

Console.WriteLine("Daylight savings");

var x = Appointment.HasDaylightSavingChanged(new DateTime(2019, 3, 13, 0, 0, 0), Location.NewYork);
var y = Appointment.HasDaylightSavingChanged(new DateTime(2019, 11, 7, 0, 0, 0), Location.NewYork);

Console.WriteLine(x);
Console.WriteLine(y);

Console.WriteLine("Normalize datetimes");

a = Appointment.NormalizeDateTime("11/25/2019 13:45:00", Location.NewYork);
b = Appointment.NormalizeDateTime("25/11/2019 13:45:00", Location.London);
c = Appointment.NormalizeDateTime("25/11/2019 13:45:00", Location.Paris);
var d = Appointment.NormalizeDateTime("25/11/2019 13:45:00", Location.NewYork);

Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);
Console.WriteLine(d);

