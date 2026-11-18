export default function EmployeeDetails({ employee }) {

if (employee === null) {
        throw new Error("Employee data is missing!");
    }

    return (
        <div>
            <h2>Employee Details</h2>

            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
        </div>
    );
}