
import { useState } from "react";

export default function DerivedState() {
    const [employees, setEmployees] = useState([
        { id: 101, name: "Hemant Kumar", department: "IT", salary: 105000 },
        { id: 102, name: "Maya Kumari", department: "Garment", salary: 15000 },
        { id: 103, name: "Yogendra Kumar", department: "Education", salary: 50000 }
    ]);

    // Derived values
    const totalEmployees = employees.length;

    const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary, 0);

    const itEmployees = employees.filter(
        employee => employee.department === "IT"
    );

    function increaseSalary(id) {
        setEmployees(previous =>
            previous.map(employee =>
                employee.id === id
                    ? { ...employee, salary: employee.salary + 5000 }
                    : employee
            )
        );
    }

    return (
        <div>
            <h2>Derived State</h2>
            <h2>Employee Summary</h2>

            <p>Total Employees: {totalEmployees}</p>
            <p>Total Salary: ₹{totalSalary.toLocaleString("en-IN")}</p>

            <h3>IT Employees</h3>
            {itEmployees.map(employee => (
                <div key={employee.id}>
                    <p>
                        {employee.name} — ₹
                        {employee.salary.toLocaleString("en-IN")}
                    </p>
                    <button onClick={() => increaseSalary(employee.id)}>
                        Increase Salary by ₹5,000
                    </button>
                </div>
            ))}
        </div>
    );
}
