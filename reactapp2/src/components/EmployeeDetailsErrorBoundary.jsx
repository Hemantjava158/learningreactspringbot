
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeDetailsErrorBoundary() {
    const [employee, setEmployee] = useState({
        name: "Hemant Kumar",
        department: "IT",
        salary: 105000
    });

    const [resetKey, setResetKey] = useState(0);

    return (
        <div>
            <h2>Error Boundary Example</h2>
            <h1>Employee Management</h1>

            <button onClick={() => setEmployee(null)}>
                Simulate Error
            </button>

            <hr />

            <h2>Application Header</h2>

            <ErrorBoundary>
                <EmployeeDetails employee={employee} />
            </ErrorBoundary>


<button onClick={() => {
    setEmployee({
        name: "Hemant Kumar",
        department: "IT",
        salary: 105000
    });
    setResetKey(previous => previous + 1);
}}>
    Retry
</button>
        </div>
    );
}

export default EmployeeDetailsErrorBoundary;
