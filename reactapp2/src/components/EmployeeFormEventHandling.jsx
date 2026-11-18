import { useState } from "react";

export default function EmployeeFormEventHandling() {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        isActive: false
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setEmployee(previousEmployee => ({
            ...previousEmployee,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Employee:", employee);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Employee Form Event Handling Complete Example</h2>

            <div>
                <label>Name: </label>

                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Email: </label>

                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Department: </label>

                <select
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                >
                    <option value="">
                        Select Department
                    </option>

                    <option value="IT">
                        IT
                    </option>

                    <option value="Garment">
                        Garment
                    </option>

                    <option value="Education">
                        Education
                    </option>
                </select>
            </div>

            <br />

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={employee.isActive}
                        onChange={handleChange}
                    />

                    Active Employee
                </label>
            </div>

            <br />

            <button type="submit">
                Submit
            </button>

            <hr />

            <h3>Employee Details</h3>

            <p>Name: {employee.name}</p>

            <p>Email: {employee.email}</p>

            <p>
                Department: {employee.department}
            </p>

            <p>
                Status:
                {employee.isActive
                    ? " Active"
                    : " Inactive"}
            </p>

        </form>
    );
}