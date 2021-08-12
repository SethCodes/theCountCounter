import React from "react";

const Clear = ({ func, value, sub, changed }) => {
  return (
    <div>
      {/* input value */}
      <input
        id="numInput"
        className=""
        type="number"
        placeholder="Enter Number Value: "
        onChange={value}
      />
      <div></div>

      {/* change button */}

      <button
        className="btn btn-light changeBtn"
        onClick={sub}
        onChange={changed}
      >
        Add To Number
      </button>

      {/* clear button */}
      <button className="btn btn-light clearBtn" onClick={func}>
        Clear Number
      </button>
    </div>
  );
};

export default Clear;
