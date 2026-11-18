 function Child({
    name,
    department,
    salary
}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Department: {department}</p>
            <p>Salary: ₹{salary}</p>
        </div>
    );
}






export default function ChildComponentRendering() {

    const employees = [
        {
            id: 101,
            name: "Hemant Kumar",
            department: "IT",
            salary: 105000
        },
        {
            id: 102,
            name: "Maya Kumari",
            department: "Garment",
            salary: 15000
        },
        {
            id: 103,
            name: "Yogendra Kumar",
            department: "Education",
            salary: 50000
        }
    ];

    if (employees.length === 0) {
        return <p>No employees found.</p>;
    }



    
//     return (
//         <div>
//             <h2>Employee List</h2>
// <h2>Rendering a Child Component</h2>
//             {/* {employees.map((employee) => (
//                 <Child
//                     key={employee.id}
//                     name={employee.name}
//                     department={employee.department}
//                     salary={employee.salary}
//                 />
//             ))} */}

// <h2>Conditional List Rendering</h2>
//             {employees
//     .filter(employee => employee.department === "IT")
//     .map(employee => (
//         <Child
//             key={employee.id}
//             name={employee.name}
//             department={employee.department}
//             salary={employee.salary}
//             // {...employee}
//         />
//     ))
// }



//         </div>
//     );





const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

 return (
        <div>
            <h2>Employee List</h2>

            {employees.map((employee) => (
                <div key={employee.id}>
                    <p>
                        {employee.name} - ₹{employee.salary}
                    </p>
                </div>
            ))}

            <hr />

            <h3>Total Salary: ₹{totalSalary}</h3>
        </div>
    );
    
}