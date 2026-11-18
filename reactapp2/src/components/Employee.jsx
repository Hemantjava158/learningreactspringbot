// export default function Employee(props){
//     return (

// <>
// <h2>Components with Props</h2>
// <p>Name: {props.name}</p>
// <p>Department: {props.department}</p>
// <p>Salary:  {props.salary}</p>
// </>
//     );
// }



export default function Employee({name, department, salary}){
    return (

<>
<h2>Destructuring Props</h2>
<p>Name: {name}</p>
<p>Department: {department}</p>
<p>Salary:  {salary}</p>
</>
    );
}




