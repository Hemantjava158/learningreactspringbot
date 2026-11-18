function EmployeeTable() {

    const employees = [
        {
            id: 101,
            name: "Hemant Kumar",
            department: "IT",
            salary: 105000
        },
        {
            id: 102,
            name: "Maya Kumari",
            department: "Garment",
            salary: 15000
        }
    ];

    return (
        <>
        <h2>Rendering Lists in a Table</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>₹{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default EmployeeTable;