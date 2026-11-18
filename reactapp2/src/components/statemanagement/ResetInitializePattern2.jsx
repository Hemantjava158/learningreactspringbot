
import { useState } from "react";
import EmployeeForm from "./EmployeeForm"

export default function ResetInitializePattern2() {
    const [formKey, setFormKey] = useState(0);

    function resetForm() {
        setFormKey(previous => previous + 1);
    }

    return (
        <div>
            <h2>Reset and Initialize Pattern --- Approach B: Reset using a key prop</h2>
            <h2>Reset Employee Form</h2>

            <EmployeeForm key={formKey} />

            <button onClick={resetForm}>
                Reset Entire Form
            </button>
        </div>
    );
}
