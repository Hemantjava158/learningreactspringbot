
export default function EmployeeDetails({ employee }) {
    return (
        <div>
            <h3>Employee Details</h3>
            <h3>Child component that displays state</h3>

            <p>Name: {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: ₹{employee.salary.toLocaleString("en-IN")}</p>
        </div>
    );
}
