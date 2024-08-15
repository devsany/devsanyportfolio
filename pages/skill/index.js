import React, { useState } from "react";

const index = () => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [border, setBorder] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="width">Set width</label>
        <input
          type="range"
          name="width"
          id="width"
          max={100}
          min={10}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="height">Set height</label>
        <input
          type="range"
          name="height"
          id="height"
          max={100}
          min={10}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <label htmlFor="Border">Set Border</label>
        <input
          type="range"
          name="Border"
          id="Border"
          max={10}
          min={1}
          onChange={(e) => {
            setBorder(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          border: `${border}px  solid black`,
          height: `${height}px`,
          width: `${width}px`,
        }}
      >
        skill
      </div>
      css use: border: {border}px solid black,
      <br /> height: {height}px, <br />
      width:{width}
      px,
    </div>
  );
};

export default index;
