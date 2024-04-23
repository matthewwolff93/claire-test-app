import { useCallback, useReducer, useRef } from "react";

export default function ReducerExample() {
  const ref = useRef();
  const reducer = useCallback((list, action) => {
    switch (action.type) {
      case "added": {
        if (!action.name || list.includes(action.name)) return list;
        return [...list, action.name];
      }
      case "removed": {
        return list.filter((item) => item !== action.name);
      }
      default:
        throw Error("Unknown action: ", action.type);
    }
  }, []);
  const [state, dispatch] = useReducer(reducer, list);

  const addItem = useCallback(() => {
    dispatch({
      type: "added",
      name: ref.current.value,
    });
    ref.current.value = "";
  }, []);

  const removeItem = useCallback((name) => {
    dispatch({
      type: "removed",
      name,
    });
  }, []);

  return (
    <div>
      {state.map((item) => (
        <div key={item}>
          <span>
            {item} <button onClick={() => removeItem(item)}>Remove</button>
          </span>
        </div>
      ))}
      <input ref={ref} placeholder="Enter a new name" />
      <button onClick={addItem}>Add name</button>
    </div>
  );
}

const list = ["alice", "bob", "claire", "denise", "egbert"];
