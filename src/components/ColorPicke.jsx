import { HexColorPicker } from "react-colorful";
import { useState, useEffect } from "react";

const ColorPicke = () => {
  //creating state to store our color and also set color using onChange event for sketch picker

  const [color, setColor] = useState("#aabbcc");

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="bgGradient absolute left-0 top-0 -z-20 min-h-screen w-full" />
        <div className="bgSquare bgSquareUp absolute left-[150px] -z-10" />
        <div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div>
    </>
  );
};
export default ColorPicke;
