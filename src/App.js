import React, { useState } from "react";
import Add from "./Add";
import Subtract from "./Subtract";
import Clear from "./Clear.js";
import Laughing from './sounds/Laughing.mp3';
import BeatIt from './sounds/Beatit.mp3';
import Down from './sounds/Downhere.mp3';
import IWillCount from './sounds/iWillCount.mp3';



function App() {
  //set state for main number and input number
  const [number, setNumber] = useState(0);
  const [tempNum, setTempNum] = useState(0);

  const white = "rgba(255, 255, 255, 0.5)";



  //add func
  const add = () => {
    setNumber((prevNum) => prevNum + 1);
    let laughing = new Audio(Laughing);

    laughing.play();

    //change number color
    let bg = document.getElementById("num").style;
    bg.backgroundColor = "green";

    setTimeout(() => {
      bg.backgroundColor = white;
    }, 100);
  };

  //subtract func
  const subtract = () => {
    if (number > 0) {
      setNumber((prevNum) => prevNum - 1);

      let down = new Audio(Down);

      down.play();

      //change number color
      let bg = document.getElementById("num").style;
      bg.backgroundColor = "red";

      setTimeout(() => {
        bg.backgroundColor = white;
      }, 100);
    } else {
      return null;
    }
  };

  //clear number to 0
  const clear = () => {
    setNumber(0);
    let beatIt = new Audio(BeatIt);

    beatIt.play();
  };

  //handle input changes
  const handleChange = (e) => {
    e.preventDefault();
    let temp = e.target.value;
    setTempNum(temp);
  };

  //add input value to number func
  const handleSubmit = (e) => {
    setNumber((prevNum) => prevNum + Number(tempNum));
    document.getElementById("numInput").value = 0;

    //play sound
    let willCount = new Audio(IWillCount);

    willCount.play();
  };

  return (
    <div id="App" className="App ">
      <div id="calc" className="container fluid">
        <div className="row ">
          <div className="col add">
            <Add func={add} />{" "}
          </div>
          <div id="num" className="col text-center">
            <h1>{number}</h1>
          </div>
          <div className="col">
            <Subtract func={subtract} />{" "}
          </div>
        </div>
        <div id="clear" className="container">
          <Clear func={clear} value={handleChange} sub={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
