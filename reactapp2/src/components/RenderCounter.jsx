
import { useRef, useState } from "react";

export default function RenderCounter() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current = renders.current + 1;

  return (
    <div>
        <h2>useRef--- Storing Values Without Re-render</h2>

      <p>Count: {count}</p>
      <p>Component rendered: {renders.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
