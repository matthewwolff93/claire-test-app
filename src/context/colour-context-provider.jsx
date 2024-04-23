import { useCallback, useState } from "react";
import { ColourContext } from "./colour-context";

export function ColourContextProvider({ children }) {
  const [colour, setColour] = useState("red");

  const changeColour = useCallback((newColour) => {
    setColour(newColour);
  }, []);

  return (
    <ColourContext.Provider value={{ colour, changeColour }}>
      {children}
    </ColourContext.Provider>
  );
}
