
/*
function ListRendering() {
    const employees = [
        "Hemant Kumar",
        "Maya Kumari",
        "Yogendra Kumar"
    ];

    return (
        <div>
        <h2>Rendering lists in React</h2>
        <ul>
            {employees.map((employee) => (
                <li>{employee}</li>
            ))}
        </ul>
        </div>
    );
}

export default ListRendering;

*/


function ListRendering() {
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
        },
        {
            id: 103,
            name: "Yogendra Kumar",
            department: "Education",
            salary: 50000
        }
    ];

    return (
        <div>
            <h2>Rendering lists in React</h2>
            {employees.map((employee) => (
                <div key={employee.id}>
                    <h3>{employee.name}</h3>
                    <p>Department: {employee.department}</p>
                    <p>Salary: ₹{employee.salary}</p>
                </div>
            ))}
        </div>
    );
}

export default ListRendering;