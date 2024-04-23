import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./child";
import { ColourContextProvider } from "./context/colour-context-provider";
import ColourChildOne from "./context/colour-child-one";
import ColourChildTwo from "./context/colour-child-two";
import ReducerExample from "./reducer-example";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log("Count effect run: ", count);

    return () => {
      console.log("Count effect cleaned up: ", count);
    };
  }, [count]);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const onCalculateSize = useCallback(() => {
    console.log(ref.current);
    console.log("My width is: ", ref.current.offsetWidth);
  }, []);

  return (
    <ColourContextProvider>
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
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
        </div>

        <hr />
        <h2>Child</h2>
        {showComponent ? <Child /> : null}
        <button onClick={() => setShowComponent((prev) => !prev)}>
          {showComponent ? "Hide" : "Show"}
        </button>

        <hr />
        <h2>Context</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <ColourChildOne />
          <ColourChildTwo />
        </div>

        <hr />
        <h2>Ref</h2>
        <textarea ref={ref} rows={5} placeholder="This is a text area" />
        <button onClick={onCalculateSize}>What is my size?</button>

        <hr />
        <h2>Reducer</h2>
        <ReducerExample />
      </main>
    </ColourContextProvider>
  );
}

export default App;
