
import { useState } from "react";
import EmployeeForm from "./ChildComponent1";
import EmployeeDetails from "./ChildComponent2";

export default function LiftingStateUp() {
    const [employee, setEmployee] = useState({
        name: "Hemant Kumar",
        department: "IT",
        salary: 105000
    });

    return (
        <div>
            <h2>React State Management - Lifting State Up Pattern</h2>
            <h2>Employee Management</h2>

            <EmployeeForm
                employee={employee}
                setEmployee={setEmployee}
            />

            <EmployeeDetails employee={employee} />
        </div>
    );
}
