
import React, { useState, useEffect } from 'react';

/*
export default function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

/*
export default function UseEffectExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>Seconds: {seconds}</div>
}

*/


/*

export default function UseEffectExample() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8088/api/employees")
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Employee List</h2>
            <h2>useEffect Example</h2>

            {employees.map(employee => (
                <div key={employee.id}>
                    <h3>{employee.name}</h3>
                    <p>{employee.department}</p>
                    <p>₹{employee.salary}</p>
                </div>
            ))}
        </div>
    );
}

*/





export default function UseEffectExample() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("http://localhost:8088/api/employees")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch employees");
                }

                return response.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
       

<div>
    <h2>Employees</h2>
    <h2>useEffect Example with Error Handling</h2>

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
            {employees.map(employee => (
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