
import { useMemo, useState } from "react";

const initialEmployees = [
    { id: 101, name: "Hemant Kumar", department: "IT", salary: 105000 },
    { id: 102, name: "Maya Kumari", department: "Garment", salary: 15000 },
    { id: 103, name: "Yogendra Kumar", department: "Education", salary: 50000 }
];

export default function UseMemoEmployeeSalary() {
    const [employees, setEmployees] = useState(initialEmployees);
    const [count, setCount] = useState(0);

    const totalSalary = useMemo(() => {
        console.log("Calculating total salary...");

        return employees.reduce(
            (total, employee) => total + employee.salary,
            0
        );
    }, [employees]);

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
            <h3>useMemo Employee Salary</h3>
            <h2>Employee Salary Summary</h2>

            <p>
                Total Salary: ₹{totalSalary.toLocaleString("en-IN")}
            </p>

            <button onClick={() => setCount(previous => previous + 1)}>
                Counter: {count}
            </button>

            <h3>Employees</h3>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>
                                ₹{employee.salary.toLocaleString("en-IN")}
                            </td>
                            <td>
                                <button
                                    onClick={() => increaseSalary(employee.id)}
                                >
                                    Increase by ₹5,000
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
