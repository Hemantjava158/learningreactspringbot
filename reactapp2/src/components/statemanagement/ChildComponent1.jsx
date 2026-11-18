
export default function EmployeeForm({ employee, setEmployee }) {
    function handleChange(event) {
        const { name, value } = event.target;

        setEmployee(previous => ({
            ...previous,
            [name]: name === "salary" ? Number(value) : value
        }));
    }

    return (
        <div>
            <h3>Edit Employee</h3>
            <h3>Child component that updates state</h3>

            <input
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Employee name"
            />

            <input
                name="department"
                value={employee.department}
                onChange={handleChange}
                placeholder="Department"
            />

            <input
                name="salary"
                type="number"
                value={employee.salary}
                onChange={handleChange}
            />
        </div>
    );
}
