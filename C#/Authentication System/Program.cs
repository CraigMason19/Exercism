using System;

var admin = new Identity
{
    EyeColor = "green",
    Email = "admin@ex.ism"
};

var authenticator = new Authenticator(admin);

Console.WriteLine($"EyeColor: {authenticator.Admin.EyeColor}\nEmail: {authenticator.Admin.Email}");