
import Employee from "./Employee";

/*
export default function EmployeeList() {
    return (
        <div>
            <h2>Parent and Child Components</h2>

            <Employee
                name="Hemant Kumar"
                department="IT"
                salary={105000}
            />

            <Employee
                name="Maya Kumari"
                department="Garment"
                salary={15000}
            />

            <Employee
                name="Yogendra Kumar"
                department="Education"
                salary={50000}
            />
        </div>
    );
}

*/

const employees = [
    {
        salary: 80000,
        name: "Rahul",
        department: "IT"
    },
    {
        salary: 20000,
        name: "Amit",
        department: "HR"
    },
    {
        salary: 30000,
        name: "Raj",
        department: "Finance"
    }
];


 export default function EmployeeList() {

    return (
        <div>
            <h2>Rendering Components Using Arrays</h2>
            {employees.map(employee => (
                <Employee
                    key={employee.name}
                    name={employee.name}
                    department={employee.department}
                    salary={employee.salary}
                />
            ))}
        </div>
    );
}