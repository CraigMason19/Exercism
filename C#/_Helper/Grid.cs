using System;
using System.Collections.Generic;
using System.Linq;

/// <summary>
/// A class for 2D grids. 
/// 
/// Used in
///     - Minesweeper
///     - Queen Attack
///     - Word Search
/// 
/// It is 0 based and accessed by row then column
/// </summary>

namespace _Helper
{
    public enum Direction
    {
        N,
        E,
        S,
        W,
        NE,
        SE,
        SW,
        NW,
    }

    public class Offset
    {
        public int X { get; set; }
        public int Y { get; set; }
    }

    public class OffsetData<T>
    {
        public Direction Direction { get; set; }
        public T? Value { get; set; }
    }

    public class OffsetDataArray<T>
    {
        public Direction Direction { get; set; }
        public T[]? Values { get; set; }
    }

    public static class Offsets
    {
        public static readonly Dictionary<Direction, Offset> OffsetDictionary = new Dictionary<Direction, Offset>
        {
            { Direction.N, new Offset { X = -1, Y = 0 } },
            { Direction.S, new Offset { X = 1, Y = 0 } },
            { Direction.E, new Offset { X = 0, Y = 1 } },
            { Direction.W, new Offset { X = 0, Y = -1 } },
            { Direction.NE, new Offset { X = -1, Y = 1 } },
            { Direction.SE, new Offset { X = 1, Y = 1 } },
            { Direction.SW, new Offset { X = 1, Y = -1 } },
            { Direction.NW, new Offset { X = -1, Y = -1 } }
        };
    }

    public class Grid<T>
    {
        public List<List<T>> _data = [];

        public (int, int) Size { get; }

        public Grid(int rows, int columns, T fillValue = default)
        {
            for (int i = 0; i < rows; i++)
            {
                var col = new List<T>();

                for (int j = 0; j < columns; j++)
                {
                    col.Add(fillValue);
                };

                this._data.Add(col);
            };

            this.Size = (_data.Count, _data.First().Count);
        }

        public static Grid<T> FromData(T[][] data)
        {
            Grid<T> grid = new Grid<T>(data.Length, data[0].Length);

            for (int i = 0; i < grid._data.Count; i++)
            {
                for (int j = 0; j < grid._data[i].Count; j++)
                {
                    grid._data[i][j] = data[i][j];
                }
            }

            return grid;
        }

        public static Grid<string> FromStringArray(string[] data)
        {
            string[][] stringData = new string[data.Length][];

            for (int i = 0; i < data.Length; i++)
            {
                stringData[i] = new string[data[i].Length];
                for (int j = 0; j < data[i].Length; j++)
                {
                    stringData[i][j] = data[i][j].ToString();
                }
            }

            return Grid<string>.FromData(stringData);
        }

        public bool IsValidCoordinate(int x, int y) => x >= 0 && x < this.Size.Item1 && y >= 0 && y < this.Size.Item2;

        public T Cell(int x, int y)
        {
            if(this.IsValidCoordinate(x, y) == false)
            {
                throw new ArgumentOutOfRangeException("Co-ordinate is not in the grid");
            }

            return _data[x][y];
        }

        public void FillCell(int x, int y, T value)
        {
            if (IsValidCoordinate(x, y))
            {
                _data[x][y] = value;
            }
            else
            {
                throw new Exception("Co-ordinate is not in the grid");
            }
        }

        public void ForEach(Action<T, int, int> callback)
        {
            for (int row = 0; row < _data.Count; row++)
            {
                for (int col = 0; col < _data[0].Count; col++)
                {
                    callback(_data[row][col], row, col);
                }
            }
        }

        public T[] Flat()
        {
            List<T> flatList = new List<T>();

            foreach(var row in _data)
            {
                flatList.AddRange(row);
            }

            return flatList.ToArray();
        }

        public T? GetOffsetData(int x, int y, Offset offset)
        {
            int newX = x + offset.X;
            int newY = y + offset.Y;

            if (this.IsValidCoordinate(newX, newY))
            {
                return _data[newX][newY];
            }

            return default(T);
        }

        public T[] GetOffsetDataLoop(int x, int y, Offset offset)
        {
            List<T> values = new List<T>();
            int counter = 1;

            T value = GetOffsetData(x, y, new Offset { X = 0, Y = 0 });
            while (!EqualityComparer<T>.Default.Equals(value, default(T)))
            {
                values.Add(value);

                value = GetOffsetData(x, y, new Offset { X = offset.X * counter, Y = offset.Y * counter });
                counter++;
            }

            return values.ToArray();
        }

        public T[] Row(int n)
        {
            if (n >= 0 && n < _data.Count)
            {
                return _data[n].ToArray();
            }
            else
            {
                throw new Exception("Invalid row index");
            }
        }

        public T[] Column(int n)
        {
            if (n >= 0 && n < _data[0].Count)
            {
                List<T> column = new List<T>();

                foreach (var row in _data)
                {
                    column.Add(row[n]);
                }

                return column.ToArray();
            }
            else
            {
                throw new Exception("Invalid column index");
            }
        }

        public T[] Cardinal(int x, int y, Direction direction)
        {
            Offset offset = Offsets.OffsetDictionary[direction];

            if (offset != null)
            {
                return GetOffsetDataLoop(x, y, offset);
            }
            else
            {
                throw new Exception("Cardinal direction not recognized.");
            }
        }

        public T[] Ordinal(int x, int y, Direction direction)
        {
            Offset offset = Offsets.OffsetDictionary[direction];

            if (offset != null)
            {
                return GetOffsetDataLoop(x, y, offset);
            }
            else
            {
                throw new Exception("Ordinal direction not recognized.");
            }
        }

        public T[] Cardinals(int x, int y)
        {
            return new T[][]
            {
                Cardinal(x, y, Direction.N),
                Cardinal(x, y, Direction.S),
                Cardinal(x, y, Direction.E),
                Cardinal(x, y, Direction.W)
            }.SelectMany(a => a).ToArray();
        }

        public T[] Ordinals(int x, int y)
        {
            return new T[][]
            {
                Ordinal(x, y, Direction.NE),
                Ordinal(x, y, Direction.SE),
                Ordinal(x, y, Direction.SW),
                Ordinal(x, y, Direction.NW)
            }.SelectMany(a => a).ToArray();
        }

        public OffsetDataArray<T>[] CardinalsAndOrdinals(int x, int y)
        {
            List<OffsetDataArray<T>> dataList =
            [
                new OffsetDataArray<T> { Direction = Direction.N, Values = Cardinal(x, y, Direction.N) },
                new OffsetDataArray<T> { Direction = Direction.S, Values = Cardinal(x, y, Direction.S) },
                new OffsetDataArray<T> { Direction = Direction.E, Values = Cardinal(x, y, Direction.E) },
                new OffsetDataArray<T> { Direction = Direction.W, Values = Cardinal(x, y, Direction.W) },
                new OffsetDataArray<T> { Direction = Direction.NE, Values = Ordinal(x, y, Direction.NE) },
                new OffsetDataArray<T> { Direction = Direction.SE, Values = Ordinal(x, y, Direction.SE) },
                new OffsetDataArray<T> { Direction = Direction.SW, Values = Ordinal(x, y, Direction.SW) },
                new OffsetDataArray<T> { Direction = Direction.NW, Values = Ordinal(x, y, Direction.NW) },
            ];

            return dataList.ToArray();
        }

        public OffsetData<T>[] GetNeighbors(int x, int y, params Direction[] directions)
        {
            List<OffsetData<T>> dataList = new List<OffsetData<T>>();

            if (directions.Length == 0)
            {
                directions = new Direction[] { Direction.N, Direction.E, Direction.S, Direction.W, Direction.NE, Direction.SE, Direction.SW, Direction.NW };
            }

            foreach (Direction dir in directions)
            {
                T? value = GetOffsetData(x, y, Offsets.OffsetDictionary[dir]);
                dataList.Add(new OffsetData<T> { Direction = dir, Value = value });
            }

            return dataList.ToArray();
        }

        public override string ToString() => string.Join("\n", _data.Select(row => string.Join(" ", row)));
    }
}