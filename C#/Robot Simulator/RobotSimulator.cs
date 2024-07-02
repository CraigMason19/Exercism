using System;

public enum Direction
{
    North,
    East,
    South,
    West
}

public class RobotSimulator
{
    public Direction Direction { get; private set; } = Direction.North;

    public int X { get; private set; } = 0;

    public int Y { get; private set; } = 0;


    public RobotSimulator() { }

    public RobotSimulator(Direction direction, int x, int y)
    {
        this.Direction = direction;
        this.X = x;
        this.Y = y;
    }

    public void TurnRight()
    {
        switch (this.Direction)
        {
            case Direction.North:
                this.Direction = Direction.East;
                break;
            case Direction.East:
                this.Direction = Direction.South;
                break;
            case Direction.South:
                this.Direction = Direction.West;
                break;
            case Direction.West:
                this.Direction = Direction.North;
                break;
        }
    }

    public void TurnLeft()
    {
        switch (this.Direction)
        {
            case Direction.North:
                this.Direction = Direction.West;
                break;
            case Direction.West:
                this.Direction = Direction.South;
                break;
            case Direction.South:
                this.Direction = Direction.East;
                break;
            case Direction.East:
                this.Direction = Direction.North;
                break;
        }
    }

    public void Advance()
    {
        switch (this.Direction)
        {
            case Direction.North:
                this.Y++;
                break;
            case Direction.South:
                this.Y--;
                break;
            case Direction.East:
                this.X++;
                break;
            case Direction.West:
                this.X--;
                break;
        }
    }

    public void Move(string instructions)
    {
        foreach(var instruction in instructions)
        {
            var command = Char.ToUpper(instruction);

            switch (command)
            {
                case 'R':
                    this.TurnRight();
                    break;
                case 'L':
                    this.TurnLeft();
                    break;
                case 'A':
                    this.Advance();
                    break;
                default:
                    throw new ArgumentException("Invalid instruction in string.");
            }
        }
    }
}