using System;

class RemoteControlCar
{
    private int _distance = 0; // in M
    private int _batteryCharge = 100; // in %

    public static RemoteControlCar Buy()
    {
        return new RemoteControlCar();
    }

    public string DistanceDisplay()
    {
        return $"Driven {_distance} meters";
    }

    public string BatteryDisplay()
    {
        if (_batteryCharge == 0)
            return "Battery empty";

        return $"Battery at {_batteryCharge}%";
    }

    public void Drive()
    {
        if (_batteryCharge == 0)
            return;

        _distance += 20;
        _batteryCharge -= 1;
    }
}