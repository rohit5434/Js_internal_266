// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using System;

delegate double BillingStrategy(double amount);

class Patient
{
    public string Name;
    public virtual double GetTreatmentCost()
    {
        return 0;
    }
}

class InPatient : Patient
{
    public int Days;
    public override double GetTreatmentCost()
    {
        return Days * 2000;
    }
}

class OutPatient : Patient
{
    public override double GetTreatmentCost()
    {
        return 500;
    }
}

class Billing
{
    public static double Normal(double amt)
    {
        return amt;
    }

    public static double Insurance(double amt)
    {
        return amt * 0.7;
    }
}

class Hospital
{
    public event Action<string> Notify;

    public void Admit(Patient p)
    {
        Console.WriteLine("Patient Admitted: " + p.Name);
        Notify?.Invoke("Notification sent to departments");
    }

    public void Bill(Patient p, BillingStrategy bs)
    {
        Console.WriteLine("Final Bill: " + bs(p.GetTreatmentCost()));
        Notify?.Invoke("Billing completed");
    }
}

class Program
{
    static void Main()
    {
        Hospital h = new Hospital();
        h.Notify += msg => Console.WriteLine(msg);

        Console.WriteLine("1. InPatient\n2. OutPatient");
        int ch = int.Parse(Console.ReadLine());

        Patient p;

        if (ch == 1)
        {
            InPatient ip = new InPatient();
            Console.Write("Enter Name: ");
            ip.Name = Console.ReadLine();
            Console.Write("Enter Days: ");
            ip.Days = int.Parse(Console.ReadLine());
            p = ip;
        }
        else
        {
            OutPatient op = new OutPatient();
            Console.Write("Enter Name: ");
            op.Name = Console.ReadLine();
            p = op;
        }

        h.Admit(p);

        Console.WriteLine("1. Normal Billing\n2. Insurance Billing");
        int b = int.Parse(Console.ReadLine());

        BillingStrategy bs = b == 1
            ? Billing.Normal
            : Billing.Insurance;
        h.Bill(p, bs);
    }
}

