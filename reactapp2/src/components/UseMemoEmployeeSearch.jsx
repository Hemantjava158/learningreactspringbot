
import { useMemo, useState } from "react";

const employeeData = [
    { id: 101, name: "Hemant Kumar", department: "IT", salary: 105000 },
    { id: 102, name: "Maya Kumari", department: "Garment", salary: 15000 },
    { id: 103, name: "Yogendra Kumar", department: "Education", salary: 50000 },
    { id: 104, name: "Amit Sharma", department: "IT", salary: 75000 }
];

export default function UsememoEmployeeSearch() {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [count, setCount] = useState(0);

    const filteredEmployees = useMemo(() => {
        console.log("Filtering employees...");

        return employeeData.filter(employee =>
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.department.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const sortedEmployees = useMemo(() => {
        console.log("Sorting employees...");

        return [...filteredEmployees].sort((a, b) =>
            sortOrder === "asc"
                ? a.salary - b.salary
                : b.salary - a.salary
        );
    }, [filteredEmployees, sortOrder]);

    return (
        <div>
            <h2>useMemo - Employee Search and Sort</h2>

            <input
                type="text"
                placeholder="Search name or department"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />

            <button
                onClick={() =>
                    setSortOrder(previous =>
                        previous === "asc" ? "desc" : "asc"
                    )
                }
            >
                Salary: {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
            </button>

            <button onClick={() => setCount(previous => previous + 1)}>
                Counter: {count}
            </button>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedEmployees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>
                                ₹{employee.salary.toLocaleString("en-IN")}
                            </td>
                        </tr>
                    ))}

                    {sortedEmployees.length === 0 && (
                        <tr>
                            <td colSpan="4">No employees found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
