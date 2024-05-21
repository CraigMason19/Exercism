var destination = new Destination
{
    Name = "Vo Mimbre",
    Inhabitants = 332
};

var characterA = new Character
{
    Class = "Warrior",
    Level = 1,
    HitPoints = 30
};

var characterB = new Character
{
    Class = "Mage",
    Level = 20,
    HitPoints = 2000
};

Console.WriteLine(GameMaster.Describe(characterA, destination));
Console.WriteLine(GameMaster.Describe(characterB, destination, TravelMethod.Horseback));