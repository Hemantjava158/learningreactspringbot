
import { useEmployees } from "./EmployeeContext";

export default function EmployeeList() {
    const { employees, dispatch } = useEmployees();

    return (
        <div>
            <h3>Employee List</h3>

            <p>Total Employees: {employees.length}</p>

            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>
                                ₹{employee.salary.toLocaleString("en-IN")}
                            </td>
                            <td>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "INCREASE_SALARY",
                                            payload: employee.id
                                        })
                                    }
                                >
                                    + ₹5,000
                                </button>

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "DELETE_EMPLOYEE",
                                            payload: employee.id
                                        })
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    {employees.length === 0 && (
                        <tr>
                            <td colSpan="5">No employees found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
