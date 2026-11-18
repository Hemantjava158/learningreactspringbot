import UseCallbackChild from "./UseCallbackChild";
import { useState, useCallback } from "react";

// export default function UseCallbackParent(){
  
//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//     alert("useCallback click !! ");
//   }, []);

//   return (
//     <>
//       <h1>Parent</h1>
//       <UseCallbackChild onClick={handleClick}/>
//     </>
//   )
// }






export default function UseCallbackParent(){


  const [count, setCount] = useState(0);

    const handleChildClick = useCallback(() => {
        console.log("Child button clicked!");
    }, []);

    return (
        <div>
          <h3>useCallback Hook</h3>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(previous => previous + 1)}>
                Increment Counter
            </button>

            <UseCallbackChild onClick={handleChildClick} />
        </div>
    );


}