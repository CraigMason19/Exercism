using System;
using System.Linq;

public static class TelemetryBuffer
{
    public static byte[] ToBuffer(long reading)
    {
        byte prefixByte;
        byte[] payloadBytes = { 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0 };

        // long (8 bytes)
        if (reading >= 4_294_967_296L && reading <= 9_223_372_036_854_775_807L)
        {
            prefixByte = 256 - 8;
            BitConverter.TryWriteBytes(payloadBytes, (long)reading);
        }

        // uint (4 bytes)
        else if (reading >= 2_147_483_648L && reading <= 4_294_967_295L)
        {
            prefixByte = 4;
            BitConverter.TryWriteBytes(payloadBytes, (uint)reading);
        }

        // int (4 bytes)
        else if (reading >= 65_536 && reading <= 2_147_483_647)
        {
            prefixByte = 256 - 4;
            BitConverter.TryWriteBytes(payloadBytes, (int)reading);
        }

        // ushort (2 bytes)
        else if (reading >= 0 && reading <= 65_535)
        {
            prefixByte = 2;
            BitConverter.TryWriteBytes(payloadBytes, (ushort)reading);
        }

        // short (2 bytes)
        else if (reading >= -32_768 && reading <= -1)
        {
            prefixByte = 256 - 2;
            BitConverter.TryWriteBytes(payloadBytes, (short)reading);
        }

        // int (4 bytes)
        else if (reading >= -2_147_483_648 && reading <= -32_769)
        {
            prefixByte = 256 - 4;
            BitConverter.TryWriteBytes(payloadBytes, (int)reading);
        }

        // long (8 bytes)
        else if (reading >= -9_223_372_036_854_775_808L && reading <= -2_147_483_649L)
        {
            prefixByte = 256 - 8; 
            payloadBytes = BitConverter.GetBytes((long)reading);
        }

        // Error
        else
        {
            throw new ArgumentOutOfRangeException(nameof(reading), "Value is out of range for supported types.");
        }

        return payloadBytes.Prepend(prefixByte).ToArray();
    }

    public static long FromBuffer(byte[] buffer)
    {
        byte prefixByte = buffer[0];

        var result = prefixByte switch
        {
            248 => BitConverter.ToInt64(buffer, 1),
            4   => BitConverter.ToUInt32(buffer, 1),
            252 => BitConverter.ToInt32(buffer, 1),
            2   => BitConverter.ToUInt16(buffer, 1),
            254 => BitConverter.ToInt16(buffer, 1),
            _ => 0,
        };          

        return result;
    }
}