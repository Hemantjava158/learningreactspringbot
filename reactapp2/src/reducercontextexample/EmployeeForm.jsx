
import { useState } from "react";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeForm() {
    const { dispatch } = useEmployees();

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("IT");
    const [salary, setSalary] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!name.trim() || salary === "" || Number(salary) < 0) {
            return;
        }

        const newEmployee = {
            id: Date.now(),
            name: name.trim(),
            department,
            salary: Number(salary)
        };

        dispatch({
            type: "ADD_EMPLOYEE",
            payload: newEmployee
        });

        setName("");
        setDepartment("IT");
        setSalary("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Employee</h3>

            <input
                placeholder="Employee name"
                value={name}
                onChange={event => setName(event.target.value)}
                required
            />

            <select
                value={department}
                onChange={event => setDepartment(event.target.value)}
            >
                <option value="IT">IT</option>
                <option value="Garment">Garment</option>
                <option value="Education">Education</option>
                <option value="HR">HR</option>
            </select>

            <input
                type="number"
                placeholder="Salary"
                min="0"
                value={salary}
                onChange={event => setSalary(event.target.value)}
                required
            />

            <button type="submit">Add Employee</button>
        </form>
    );
}
