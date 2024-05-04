var gs = new GradeSchool();

gs.Add("Craig", 2);
gs.Add("Sabine", 2);
gs.Add("Alexi", 3);

Console.WriteLine(String.Join(", ", gs.Roster()));
Console.WriteLine(String.Join(", ", gs.Grade(2)));