using System;

var whiteQueen = QueenAttack.Create(1, 2);
var blackQueen = QueenAttack.Create(5, 6);
bool canAttack = QueenAttack.CanAttack(whiteQueen, blackQueen);

Console.WriteLine("");

Console.WriteLine($"Can Attack? {canAttack}");