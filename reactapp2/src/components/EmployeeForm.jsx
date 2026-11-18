export default function EmployeeForm({
    employee,
    onChange
}) {


    
    return (
        <div>
            <h2>Employee Form</h2>

            <input
                type="text"
                name="name"
                value={employee.name}
                onChange={onChange}
                placeholder="Name"
            />

            <br /><br />

            <input
                type="email"
                name="email"
                value={employee.email}
                onChange={onChange}
                placeholder="Email"
            />

            <br /><br />

            <input
                type="text"
                name="department"
                value={employee.department}
                onChange={onChange}
                placeholder="Department"
            />
        </div>
    );
}