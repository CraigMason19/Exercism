public enum SpeedUnits
{
    MetersPerSecond,
    CentimetersPerSecond
}

public struct Speed
{
    public decimal Amount { get; }

    public SpeedUnits SpeedUnits { get; }

    public Speed(decimal amount, SpeedUnits speedUnits)
    {
        Amount = amount;
        SpeedUnits = speedUnits;
    }

    public override string ToString()
    {
        string unitsString = "meters per second";
        if (SpeedUnits == SpeedUnits.CentimetersPerSecond)
        {
            unitsString = "centimeters per second";
        }

        return Amount + " " + unitsString;
    }
}

public class RemoteControlCar
{
    public class CTelemetry
    {
        public string CurrentSponsor { get; private set; }

        public Speed CurrentSpeed { get; private set; }

        public void Calibrate()
        {

        }

        public bool SelfTest()
        {
            return true;
        }

        public void ShowSponsor(string sponsorName)
        {
            CurrentSponsor = sponsorName;
        }

        public void SetSpeed(decimal amount, string unitsString)
        {
            SpeedUnits speedUnits = SpeedUnits.MetersPerSecond;
            if (unitsString == "cps")
            {
                speedUnits = SpeedUnits.CentimetersPerSecond;
            }

            CurrentSpeed = new Speed(amount, speedUnits);
        }
    }

    public CTelemetry Telemetry { get; private set; } = new CTelemetry();

    public string CurrentSponsor => Telemetry.CurrentSponsor;

    public string GetSpeed()
    {
        return Telemetry.CurrentSpeed.ToString();
    }
}