const isLeap = (year) => {
    const div4 = (year % 4 == 0);
    const div100 = (year % 100 == 0);
    const div400 = (year % 400 == 0);

    if (div4)
    {
        if (div100)
        {
            if (div400)
            {
                return true;
            }

            return false;
        }

        return true;
    }

    return false;
}

const years = [2015,
    1970,
    1800,
    2000,
    2024,
];

years.forEach(year => {
    console.log(`${year} is leap year -> ${isLeap(year)}`);

});