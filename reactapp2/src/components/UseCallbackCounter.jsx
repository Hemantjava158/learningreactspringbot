
import { useState, useCallback } from "react";

export default  function UseCallbackCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);            // 👈 dependency

  return (
    <>
    <h2>useCallback with Dependencies</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </>
  );
}
