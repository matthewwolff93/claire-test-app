import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I have mounted");

    return () => {
      console.log("I have unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count effect run: ", count);

    return () => {
      console.log("Count effect cleaned up: ", count);
    };
  }, [count]);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <main>
      <h1>Test App</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h2>Counter</h2>
      <div>Count: {count}</div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
    </main>
  );
}

export default App;
