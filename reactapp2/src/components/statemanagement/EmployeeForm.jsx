
import { useState } from "react";

export default function EmployeeForm() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");

    return (
        <div>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Employee name"
            />

            <select
                value={department}
                onChange={event => setDepartment(event.target.value)}
            >
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Education">Education</option>
            </select>

            <p>Name: {name}</p>
            <p>Department: {department}</p>
        </div>
    );
}
