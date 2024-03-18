namespace Need_For_Speed
{
    class RaceTrack
    {
        int _distance;

        public RaceTrack(int distance)
        {
            _distance = distance;
        }

        public bool TryFinishTrack(RemoteControlCar car)
        {
            int laps = 100 / car._batteryDrain;
            return (laps * car._speed >= _distance);
        }
    }
}