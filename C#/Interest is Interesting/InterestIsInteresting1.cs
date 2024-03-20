using System;

static class SavingsAccount
{
    public static float InterestRate(decimal balance)
    {
        if (balance < 0)
            return 3.213f;
        if (balance < 1000)
            return 0.5f;
        if (balance < 5000)
            return 1.621f;
        if (balance >= 5000)
            return 2.475f;

        return 0f; // Do nothing
    }

    public static decimal Interest(decimal balance)
    {
        return balance * (decimal)(InterestRate(balance) / 100f);
    }

    public static decimal AnnualBalanceUpdate(decimal balance)
    {
        return balance + Interest(balance);
    }

    public static int YearsBeforeDesiredBalance(decimal balance, decimal targetBalance)
    {
        decimal newBalcance = balance;
        int years = 0;

        while (newBalcance < targetBalance)
        {
            years += 1;
            newBalcance = AnnualBalanceUpdate(newBalcance);
        }

        return years;
    }
}