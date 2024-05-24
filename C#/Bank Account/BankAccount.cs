using System;

public class BankAccount
{
    private decimal _balance;
    private bool _isOpen;

    public BankAccount()
    {
        this._balance = 0;
        this._isOpen = false;
    }

    public void Open()
    {
        this._balance = 0;
        this._isOpen = true;
    }

    public void Close()
    {
        this._balance = 0;
        this._isOpen = false;
    }

    public decimal Balance
    {
        get
        {
            if(this._isOpen == false)
            {
                throw new System.InvalidOperationException();
            }

            return this._balance;
        }
    }

    public void UpdateBalance(decimal change)
    {
        if (this._isOpen == false)
        {
            return;
        }

        this._balance += change;
    }
}