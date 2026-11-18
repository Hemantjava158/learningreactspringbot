
import { useState } from "react";

const initialEmployee = {
    name: "",
    department: "",
    salary: 0
};

export default function ResetInitializePattern1() {
    const [employee, setEmployee] = useState(initialEmployee);

    function handleChange(event) {
        const { name, value } = event.target;

        setEmployee(previous => ({
            ...previous,
            [name]: name === "salary" ? Number(value) : value
        }));
    }

    function handleReset() {
        setEmployee({ ...initialEmployee });
    }

    return (
        <div>
            <h2>Reset and Initialize Pattern ---- Approach A: Reset using a function</h2>
            <h2>Employee Form</h2>

            <input
                name="name"
                placeholder="Employee name"
                value={employee.name}
                onChange={handleChange}
            />

            <select
                name="department"
                value={employee.department}
                onChange={handleChange}
            >
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Education">Education</option>
            </select>

            <input
                name="salary"
                type="number"
                value={employee.salary}
                onChange={handleChange}
            />

            <button onClick={handleReset}>Reset Form</button>

            <h3>Current Form Data</h3>
            <pre>{JSON.stringify(employee, null, 2)}</pre>
        </div>
    );
}
