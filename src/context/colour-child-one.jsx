import { useContext } from "react";
import { ColourContext } from "./colour-context";

export default function ColourChildOne() {
  const { colour } = useContext(ColourContext);
  return <div>The colour is: {colour}</div>;
}
