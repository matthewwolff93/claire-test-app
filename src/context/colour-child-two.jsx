import { useCallback, useContext } from "react";
import { ColourContext } from "./colour-context";

export default function ColourChildTwo() {
  const { changeColour } = useContext(ColourContext);
  const onSubmit = useCallback(
    (e) => {
      const colour = e.target.value;
      changeColour(colour);
    },
    [changeColour]
  );

  return (
    <div>
      <select name="colour" defaultValue="" onChange={onSubmit}>
        <option value="" disabled>
          Please select
        </option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
}
