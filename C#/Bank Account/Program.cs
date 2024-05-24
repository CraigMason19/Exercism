var account = new BankAccount();
account.Open();
account.UpdateBalance(50);

Console.WriteLine(account.Balance);

account.Close();

try
{
    Console.WriteLine(account.Balance);
}
catch (Exception e)
{
	Console.WriteLine(e.Message);
}