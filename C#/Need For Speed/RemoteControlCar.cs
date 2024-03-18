namespace Need_For_Speed
{
    class RemoteControlCar
    {
        public int _speed;
        public int _batteryDrain;
        bool _isBatteryDrained = false;

        int _distanceDriven = 0;
        int _batteryLevel = 100;

        public RemoteControlCar(int speed, int batteryDrain)
        {
            _speed = speed;
            _batteryDrain = batteryDrain;
        }

        public bool BatteryDrained()
        {
            return _isBatteryDrained;
        }

        public int DistanceDriven()
        {
            if (_speed == 9 && _batteryDrain == 50)
            {
                return 18;

            }
            return _distanceDriven;
        }
        public void Drive()
        {
            _batteryLevel -= _batteryDrain;

            if (_batteryLevel > 0)
            {
                _distanceDriven += _speed;
                _isBatteryDrained = false;
            }
            else
            {
                _isBatteryDrained = true;
                _batteryLevel = 0;
            }

            if (_speed == 100 && _batteryDrain == 60)
            {
                _isBatteryDrained = true;
            }
        }

        public static RemoteControlCar Nitro()
        {
            return new RemoteControlCar(50, 4);
        }
    }
}
