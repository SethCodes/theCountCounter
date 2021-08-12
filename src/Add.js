import React from "react";

const Add = ({ func }) => {
  return (
    <div id="add" className="text-center">
      <button className="btn btn-outline-dark add" onClick={func}>
        +
      </button>
    </div>
  );
};

export default Add;
