using System;
using System.Collections.Generic;

public interface IRemoteControlCar
{
    public int DistanceTravelled { get; }

    void Drive();
}

public class ProductionRemoteControlCar : IRemoteControlCar, IComparable<ProductionRemoteControlCar>
{
    public int DistanceTravelled { get; private set; }
    public int NumberOfVictories { get; set; }

    public void Drive()
    {
        DistanceTravelled += 10;
    }

    public int CompareTo(ProductionRemoteControlCar that)
    {
        if (this.NumberOfVictories < that.NumberOfVictories) return -1;
        if (this.NumberOfVictories == that.NumberOfVictories) return 0;
        return 1;
    }
}

public class ExperimentalRemoteControlCar : IRemoteControlCar
{
    public int DistanceTravelled { get; private set; }

    public void Drive()
    {
        DistanceTravelled += 20;
    }
}

public static class TestTrack
{
    public static void Race(IRemoteControlCar car)
    {
        car.Drive();
    }

    public static List<ProductionRemoteControlCar> GetRankedCars(ProductionRemoteControlCar prc1,
        ProductionRemoteControlCar prc2)
    {
        var tmp = new List<ProductionRemoteControlCar>();
        tmp.Add(prc1 );
        tmp.Add(prc2);

        tmp.Sort();
        return tmp;
    }
}