using System;
using System.Collections.Generic;

/// <summary>
/// A node for a doubly linked list
/// </summary>
/// <typeparam name="T"></typeparam>
public class DoubleNode<T>
{
    public DoubleNode<T>? Prev = null;
    public DoubleNode<T>? Next = null;
    public T Value;

    public DoubleNode(T value)
    {
        this.Value = value;
    }
}

public class Deque<T>
{
    private DoubleNode<T>? _head = null;
    private DoubleNode<T>? _tail = null;

    public int Count { get; private set; } = 0;

    public Deque()
    {
    }

    public Deque(params T[] args)
    {
        foreach (var item in args)
        {
            this.Push((T)item);
        }
    }

    // Add to start of list, not the last (append)
    public void Push(T value)
    {
        var newNode = new DoubleNode<T>(value);

        // List is empty
        if (this._head == null)
        {
            this._head = newNode;
            this._tail = newNode;
        }
        // Otherwise, insert the new node at the beginning
        else
        {
            newNode.Next = this._head;
            this._head.Prev = newNode;
            this._head = newNode;
        }

        this.Count++;
    }

    // Remove and return the value from the beginning of the list
    public T Pop()
    {
        if (this._head == null)
        {
            throw new InvalidOperationException("Cannot pop from an empty list");
        }

        var value = this._head.Value;
        this._head = this._head.Next;

        // If the list is not empty
        if (this._head != null)
        {
            this._head.Prev = null;
        }
        else
        {
            this._tail = null;
        }

        this.Count--;

        return value;
    }

    public void Unshift(T value)
    {
        var newNode = new DoubleNode<T>(value);

        // If the list is empty, set head and tail to the new node
        if (this._tail == null)
        {
            this._head = this._tail = newNode;
        }
        // Otherwise, insert the new node at the end
        else
        {
            newNode.Prev = this._tail;
            this._tail.Next = newNode;
            this._tail = newNode;
        }

        this.Count++;
    }

    public T Shift()
    {
        if (this._tail == null)
        {
            throw new InvalidOperationException("Cannot shift from an empty list");
        }

        var value = this._tail.Value;
        this._tail = this._tail.Prev; // Move the tail pointer to the previous node

        // If the list is not empty
        if (this._tail != null)
        {
            this._tail.Next = null;
        }
        else
        {
            this._head = null;
        }

        this.Count--;

        return value;
    }

    // Method to traverse forwards
    public IEnumerable<T> TraverseForwards()
    {
        var current = this._head;

        while (current != null)
        {
            yield return current.Value;
            current = current.Next;
        }
    }
}