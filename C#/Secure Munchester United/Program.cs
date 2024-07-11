using System;

var spm = new SecurityPassMaker();

Console.WriteLine(spm.GetDisplayName(new Chairman()));
Console.WriteLine(spm.GetDisplayName(new Physio()));
Console.WriteLine(spm.GetDisplayName(new Security()));
Console.WriteLine(spm.GetDisplayName(new PoliceLiaison()));