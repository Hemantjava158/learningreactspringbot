import React, {useState, useMemo} from "react";

export default function UseMemoCalculation() {

    const [count, setCount]=useState(0);

    const expensiveCalculation= useMemo(()=>{
console.log("Expensive calculation executed");
let result=0;

for (let i = 0; i < 1000000; i++) {
            result += i;
        }

        return result;

    }, []);
    

return (
<div>
    <h2>useMemo Hook Example</h2>
<h2>Count: {count}</h2>
<button onClick={()=>setCount(previous=>previous+1)}>
Increment
</button>
<p>Result: {expensiveCalculation}</p>
</div>
);

}