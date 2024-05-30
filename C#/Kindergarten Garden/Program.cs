using System;

var garden = new KindergartenGarden("VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV");
int maxLength = KindergartenGarden.DEFAULT_STUDENTS.Max(name => name.Length);

Console.WriteLine(string.Join("\n", garden.rows));

foreach(var student in KindergartenGarden.DEFAULT_STUDENTS)
{
    Console.WriteLine($"{student.PadRight(maxLength)} -> {string.Join(", ", garden.Plants(student))}");
}