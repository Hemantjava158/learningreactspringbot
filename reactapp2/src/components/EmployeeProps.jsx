
// const Employee = (props) => {
//     return (
//         <div>
//             <h2>Employee Details:</h2>
//             <p>Name: {props.name}</p>
//             <p>Department: {props.department}</p>
//             <p>Salary: ₹{props.salary}</p>
//         </div>
//     );
// };

// export default Employee;




// const Employee = ({ name, department, salary }) => {
//     return (
//         <div>
//             <h2>Employee Details:</h2>
//             <p>Name: {name}</p>
//             <p>Department: {department}</p>
//             <p>Salary: ₹{salary}</p>
//         </div>
//     );
// };

// export default Employee;




const Employee = (props) => {
    return (
        <div>
            <h2>Employee Details:</h2>
            <p>Name: {props.employee.name}</p>
            <p>Department: {props.employee.department}</p>
            <p>Salary: ₹{props.employee.salary}</p>
            <p>Skills: {props.employee.skills}</p>
        </div>
    );
};

export default Employee;
