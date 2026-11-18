import { useState } from "react";

// export default function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>Counter: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 +
//             </button>

//             <button onClick={() => setCount(count - 1)}>
//                 -
//             </button>

//             <button onClick={() => setCount(0)}>
//                 Reset
//             </button>
//         </div>
//     );
// }




// export default function Profile() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       Name: <input type="text" value={name} onInput={(e) => setName(e.target.value)} /><br/>
//       Age: <input type="number" value={age} onInput={(e) => setAge(Number(e.target.value))} />
//     </div>
//   );
// }





// export default function EmployeeForm() {
//     const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//     department: "",
//     gender: ""
// });

//     function handleChange(e) {
//         const { name, value } = e.target;

//         setEmployee({
//             ...employee,
//             [name]: value
//         });
//     }

//     return (
//         <div>
//             <h2>Employee Form</h2>

//             <input
//                 type="text"
//                 name="name"
//                 value={employee.name}
//                 onChange={handleChange}
//                 placeholder="Enter name"
//             />

//             <br /><br />

//             <input
//                 type="email"
//                 name="email"
//                 value={employee.email}
//                 onChange={handleChange}
//                 placeholder="Enter email"
//             />

//             <br /><br />

//             <input
//                 type="text"
//                 name="department"
//                 value={employee.department}
//                 onChange={handleChange}
//                 placeholder="Enter department"
//             />

//             <br /><br />

//             <input
//                 type="number"
//                 name="salary"
//                 value={employee.salary}
//                 onChange={handleChange}
//                 placeholder="Enter salary"
//             />
// <br /><br />
// Gender:
//             <input
//     type="radio"
//     name="gender"
//     value="Male"
//     checked={employee.gender === "Male"}
//     onChange={handleChange}
// />
// Male

// <input
//     type="radio"
//     name="gender"
//     value="Female"
//     checked={employee.gender === "Female"}
//     onChange={handleChange}
// />
// Female

// <br /><br />

//             <h3>Employee Details</h3>

//             <p>Name: {employee.name}</p>
//             <p>Email: {employee.email}</p>
//             <p>Department: {employee.department}</p>
//             <p>Salary: {employee.salary}</p>
//             <p>Gender: {employee.gender}</p>
//         </div>
//     );
// }












export default function EmployeeForm() {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        gender: "",
        isActive: false
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setEmployee(previousEmployee => ({
            ...previousEmployee,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(employee);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Employee Form</h2>

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
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="Garment">Garment</option>
                    <option value="Education">Education</option>
                </select>
            </div>

            <br />

            <div>
                <label>Gender: </label>

                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={employee.gender === "Male"}
                    onChange={handleChange}
                />
                Male

                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={employee.gender === "Female"}
                    onChange={handleChange}
                />
                Female
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

            <h3>Employee Data</h3>

            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Gender: {employee.gender}</p>
            <p>
                Status: {employee.isActive ? "Active" : "Inactive"}
            </p>
        </form>
    );
}