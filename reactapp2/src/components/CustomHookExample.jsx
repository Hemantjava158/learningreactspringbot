// import useCounter from "./CustomCounter";

// export default function CustomHookCounter(){
//     const {count, increment, decrement, reset}=useCounter(5);

// return (

//     <div>
//         <h2>Custom Hook </h2>
//     <h2>Count: {count}</h2>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//     <button onClick={reset}>Reset</button>
//     </div>


// );


// }




import useFetch from "./CustomDataFetchHook";

export default function CustomHookCounter() {
  const { data, loading, error } = useFetch("http://localhost:8088/api/employees");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
   <div>
    <h2>Custom Hook Data Fetch</h2>
    
    <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>

        <tbody>
            {data.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>₹{employee.salary}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}

