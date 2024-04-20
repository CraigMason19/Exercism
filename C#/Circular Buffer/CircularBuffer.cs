using System;
using System.Collections.Generic;
using System.Linq;

public class CircularBuffer<T>
{
    private List<T> _data;
    private int _writeIndex = 0;
    private int _readIndex = 0;

    public int Capacity { get; private set; } = 0;

    public int Count { get; private set; } = 0;

    private static int AdvanceIndex(int index, int length) => (index + 1) % length;

    public CircularBuffer(int capacity)
    {
        Capacity = capacity;
        Clear();
    }

    public void Write(T value)
    {
        if (this.Count == Capacity)
        {
            throw new InvalidOperationException("Buffer full");
        }

        _data[_writeIndex] = value;
        _writeIndex = AdvanceIndex(_writeIndex, Capacity);
        Count++;
    }

    public T Read()
    {
        if (Count == 0)
        {
            throw new InvalidOperationException("Buffer Empty");
        }

        T value = this._data[_readIndex];

        _data[_readIndex] = default; // Reset to default value (null for reference types)
        _readIndex = AdvanceIndex(_readIndex, Capacity);

        Count--;

        return value;
    }

    public void Overwrite(T value)
    {
        if (Count != Capacity)
        {
            Write(value);
        }
        else
        {
            _data[_readIndex] = value;
            _readIndex = AdvanceIndex(_readIndex, Capacity);
        }
    }

    public void Clear()
    {
        _data = new List<T>(Capacity);

        for (int i = 0; i < Capacity; i++)
        {
            _data.Add(default);
        }

        this.Count = 0;
        this._writeIndex = 0;
        this._readIndex = 0;
    }
}