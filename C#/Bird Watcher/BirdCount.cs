namespace Bird_Watcher
{
    class BirdCount
    {
        private int[] _birdsPerDay;

        public BirdCount(int[] birdsPerDay)
        {
            this._birdsPerDay = birdsPerDay;
        }

        public static int[] LastWeek() => new int[] { 0, 2, 5, 3, 7, 8, 4 };

        public int Today() => _birdsPerDay.Last();
        
        public void IncrementTodaysCount() => _birdsPerDay[_birdsPerDay.Length - 1]++;
        
        public bool HasDayWithoutBirds()
        {
            foreach (int count in _birdsPerDay)
            {
                if (count == 0)
                    return true;
            }

            return false;
        }

        public int CountForFirstDays(int numberOfDays)
        {
            int count = 0;

            for (int i = 0; i < numberOfDays; i++)
            {
                count += this._birdsPerDay[i];
            }

            return count;
        }

        public int BusyDays()
        {
            int busyDayCount = 0;

            foreach (int count in this._birdsPerDay)
            {
                if (count >= 5)
                    busyDayCount++;
            }

            return busyDayCount;
        }
    }
}