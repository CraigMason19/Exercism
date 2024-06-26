using System;
using System.Collections;
using System.Collections.Generic;

// Push & Pop from the front. LIFO

//Initial state: (empty list)
//    head: null

//Push 1:
//    head: 1-> null

//Push 2:
//    head: 2-> 1-> null

//Push 3:
//    head: 3-> 2-> 1-> null

//Pop:
//head: 2-> 1-> null

//Pop:
//head: 1-> null

//Pop:
//head: null

/// <summary>
/// A node for a singular linked list
/// </summary>
/// <typeparam name="T"></typeparam>
public class Node<T>
{
    public Node<T>? Next = null;
    public T Value;

    public Node(T value)
    {
        this.Value = value;
    }
}

public class SimpleLinkedList<T> : IEnumerable<T>
{
    private Node<T>? _head = null;

    public int Count { get; private set; } = 0;

    public SimpleLinkedList()
    {
    }

    public SimpleLinkedList(params T[] args)
    {
        foreach (var item in args)
        {
            this.Push((T)item);
        }
    }

    Node<T> LastNode()
    {
        var current = this._head;

        while (current.Next != null)
        {
            current = current.Next;
        }

        return current;
    }

    // Add to start of list, not the last (append)
    public void Push(T value)
    {
        var newNode = new Node<T>(value);

        newNode.Next = this._head;
        this._head = newNode;

        this.Count++;
    }

    // Pop from front
    public T Pop()
    {
        if (this._head == null)
        {
            throw new InvalidOperationException("Cannot pop from an empty list");
        }

        var value = this._head.Value;
        this._head = this._head.Next;

        this.Count--;

        return value;
    }

    public IEnumerator<T> GetEnumerator()
    {
        var current = _head;

        while (current != null)
        {
            yield return current.Value;
            current = current.Next;
        }
    }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}