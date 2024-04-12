using System;

public class Orm
{
    private Database database;

    public Orm(Database database)
    {
        this.database = database;
    }

    public void Write(string data)
    {
        using (var database = this.database)
        {
            database.BeginTransaction();
            database.Write(data);
            database.EndTransaction();
        }
    }

    public bool WriteSafely(string data)
    {
        using (this.database) ;
        try
        {
            this.database.BeginTransaction();
            this.database.Write(data);
            this.database.EndTransaction();
        }
        catch (Exception)
        {
            return false;
        }

        return true;
    }
}