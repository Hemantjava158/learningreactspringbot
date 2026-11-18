// export default function UseCallbackChild(ev){
          
//      return (
//           <>
//           <h3>useCallback Hook</h3>
//                <h2>Child Component</h2>
//                <button onClick={ev.onClick}>Click</button>
//           </>
//      )
// }




import { memo } from "react";

const Child = memo(function UseCallbackChild({ onClick }) {
    console.log("Child rendered");

    return (
        <button onClick={onClick}>
            Child Button
        </button>
    );
});

export default Child;
