using System;
using System.Collections.Generic;
using System.Linq;

public class GradeSchool
{
    Dictionary<string, int> _data = new Dictionary<string, int>();

    public bool Add(string student, int grade)
    {
        if(_data.ContainsKey(student))
        {
            return false;
        }

        _data.Add(student, grade);
        return true;
    }

    public IEnumerable<string> Roster()
    {
        return _data.OrderBy(kv => kv.Value).ThenBy(kv => kv.Key).Select(kv => kv.Key).ToArray();
    }

    public IEnumerable<string> Grade(int grade)
    {
        return _data.Where(kv => kv.Value == grade).Select(kv => kv.Key).OrderBy(k => k);
    }
}