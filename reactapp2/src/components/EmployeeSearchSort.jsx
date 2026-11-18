
import { useState } from "react";

const employeeData = [
    { id: 101, name: "Hemant Kumar", department: "IT", salary: 105000 },
    { id: 102, name: "Maya Kumari", department: "Garment", salary: 15000 },
    { id: 103, name: "Yogendra Kumar", department: "Education", salary: 50000 },
    { id: 104, name: "Amit Sharma", department: "IT", salary: 75000 },
    { id: 105, name: "Priya Singh", department: "HR", salary: 45000 }
];

export default function EmployeeSearchSort() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    // Step 1: Search employees by name or department
    const filteredEmployees = employeeData.filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase())
    );

    // Step 2: Sort the filtered employees
    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
        let result;

        if (sortBy === "salary" || sortBy === "id") {
            result = a[sortBy] - b[sortBy];
        } else {
            result = a[sortBy].localeCompare(b[sortBy]);
        }

        return sortOrder === "asc" ? result : -result;
    });

    return (
        <div>
            <h2>Employee Search and Sort</h2>

            {/* Search input */}
            <label htmlFor="search">Search by name or department: </label>
            <input
                id="search"
                type="text"
                placeholder="Enter name or department"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <br /><br />

            {/* Sorting field */}
            <label htmlFor="sortBy">Sort by: </label>
            <select
                id="sortBy"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
            >
                <option value="id">Employee ID</option>
                <option value="name">Name</option>
                <option value="department">Department</option>
                <option value="salary">Salary</option>
            </select>

            {/* Sorting order */}
            <button
                onClick={() =>
                    setSortOrder(previous =>
                        previous === "asc" ? "desc" : "asc"
                    )
                }
            >
                {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
            </button>

            <p>Employees found: {sortedEmployees.length}</p>

            {/* Employee table */}
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary (₹)</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedEmployees.length > 0 ? (
                        sortedEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary.toLocaleString("en-IN")}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No employees found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
