using System;
using System.Globalization;
 
public enum Location
{
    NewYork,
    London,
    Paris
}

public enum AlertLevel
{
    Early,
    Standard,
    Late
}

public static class Appointment
{
    public static DateTime ShowLocalTime(DateTime dtUtc)
    {
        var offset = TimeZoneInfo.Local.GetUtcOffset(dtUtc);
        return dtUtc + offset;
    }

    public static DateTime Schedule(string appointmentDateDescription, Location location)
    {
        DateTime utcTime;

        switch(location)
        {
            case Location.NewYork:
                utcTime = DateTime.Parse(appointmentDateDescription, CultureInfo.InvariantCulture);
                return TimeZoneInfo.ConvertTimeToUtc(utcTime, TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time"));

            case Location.London:
                utcTime = DateTime.Parse(appointmentDateDescription, CultureInfo.InvariantCulture);
                return TimeZoneInfo.ConvertTimeToUtc(utcTime, TimeZoneInfo.FindSystemTimeZoneById("GMT Standard Time"));

            case Location.Paris:
                utcTime = DateTime.Parse(appointmentDateDescription, CultureInfo.InvariantCulture);
                return TimeZoneInfo.ConvertTimeToUtc(utcTime, TimeZoneInfo.FindSystemTimeZoneById("W. Europe Standard Time"));

            default:
                throw new ArgumentException("Invalid Location.");
        }
    }

    public static DateTime GetAlertTime(DateTime appointment, AlertLevel alertLevel)
    {
        switch(alertLevel)
        {
            case AlertLevel.Early:
                return appointment.AddDays(-1);

            case AlertLevel.Standard:
                return appointment.AddHours(-1).AddMinutes(-45);

            case AlertLevel.Late:
                return appointment.AddMinutes(-30);

            default:
                throw new ArgumentException("Invalid alert level.");
        }
    }

    public static bool HasDaylightSavingChanged(DateTime dt, Location location)
    {
        TimeZoneInfo tzi;

        switch (location)
        {
            case Location.NewYork:
                tzi = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
                break;

            case Location.London:
                tzi = TimeZoneInfo.FindSystemTimeZoneById("GMT Standard Time");
                break;

            case Location.Paris:
                tzi = TimeZoneInfo.FindSystemTimeZoneById("W. Europe Standard Time");
                break;

            default:
                throw new ArgumentException("Invalid Location.");
        }

        for (int i = 0; i < 7+1; i++)
        {
            var tmp = dt.AddDays(-i);

            if (tzi.IsDaylightSavingTime(tmp))
            {
                return true;
            }
        }

        return false;
    }

    public static DateTime NormalizeDateTime(string dtStr, Location location)
    {
        try
        {
            switch (location)
            {
                case Location.NewYork:
                    return DateTime.Parse(dtStr, new CultureInfo("en-US"));

                case Location.London:
                    return DateTime.Parse(dtStr, new CultureInfo("en-GB"));

                case Location.Paris:
                    return DateTime.Parse(dtStr, new CultureInfo("fr-FR"));

                default:
                    throw new ArgumentException("Invalid Location.");
            }
        }
        catch
        {
            return new DateTime(1, 1, 1, 0, 0, 0);
        }
    }
}