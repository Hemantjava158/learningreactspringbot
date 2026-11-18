import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetails from "./EmployeeDetails";

export default function LiftingStateUp() {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setEmployee(previousEmployee => ({
            ...previousEmployee,
            [name]: value
        }));
    }

    return (
        <div>
            <h2>Lifting State Up + Single Event Handler</h2>
            <EmployeeForm
                employee={employee}
                onChange={handleChange}
            />

            <EmployeeDetails employee={employee} />
        </div>
    );
}