using System;

public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        bool a = phoneNumber.Substring(0, 3) == "212";
        bool b = phoneNumber.Substring(4, 3) == "555";
        string c = phoneNumber.Substring(8, 4);

        return (a, b, c);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}