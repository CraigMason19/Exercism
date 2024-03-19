public static class Lasagna
{
    public static int ExpectedMinutesInOven() => 40;

    public static int RemainingMinutesInOven(int time)
    {
        return ExpectedMinutesInOven() - time;
    }

    public static int PreparationTimeInMinutes(int layers) => 2 * layers;

    public static int ElapsedTimeInMinutes(int layers, int timeInOven)
    {
        return PreparationTimeInMinutes(layers) + timeInOven;
    }
}