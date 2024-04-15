var dt = new DateTime(2019, 07, 25, 13, 45, 0);

Console.WriteLine(Appointment.Schedule("7/25/2019 13:45:00"));
Console.WriteLine(Appointment.HasPassed(dt));
Console.WriteLine(Appointment.IsAfternoonAppointment(dt));
Console.WriteLine(Appointment.Description(dt));
Console.WriteLine(Appointment.AnniversaryDate());