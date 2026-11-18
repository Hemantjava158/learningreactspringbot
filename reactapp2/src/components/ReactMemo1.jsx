import { useState } from "react";

// function Child({name}){
//     console.log("Child component rendered !! ");

//     return <h3>Hello {name}</h3>

// }


function Child({name}){
    console.log("Child component rendered !! ");

    return <h3>Hello {name}</h3>

}


export default function ReactMemo1(){
    const [count, setCount]=useState(0);

    return (
<div>
<h2>without React.memo</h2>
<h2>Count: {count}</h2>
<button onClick={()=>setCount(count+1)}> Increase count</button>
<Child name="Hemant kumar"/>

</div>
    );
}