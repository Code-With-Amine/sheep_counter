import React from "react";
import { useSheepsContext } from "../provider/Counter";
import sheep_say_no from "../assests/images/sheep_say_no.png";

function KeyBoard() {
  const Inp = React.useRef(null);
  const noImage = React.useRef(null)
  const { setIsTheCountCorrect } = useSheepsContext();
  const { SheepCounter } = useSheepsContext();
  const { setSheepCounter } = useSheepsContext();

  function SetInputValue(event) {
    const clickedNumber = event.target.innerText; // extract the number from the clicked number :)
    Inp.current.value += clickedNumber; // add the new clicked number to whatever number was in the hidden input
  }

  function CheckAnswer() {
    const userInp = Number(Inp.current.value); // convert the input value to number
    console.log(userInp);
    if (userInp === SheepCounter) {
      setIsTheCountCorrect(true);
      setSheepCounter((prevValue) => prevValue + 1);
      Inp.current.value = null;
    } else {
      noImage.current.classList.add('animate_sheep_say_no')
      Inp.current.value = null; // clear the input
      setTimeout(()=>{
        noImage.current.classList.remove('animate_sheep_say_no')

      },3500)
    }
  }

  const KeyBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>      
    <img ref={noImage} src={sheep_say_no} alt="sheep_say_no" className="d-none" />
    <div className="keyboard">
      <input ref={Inp} className="d-none" />

      {KeyBoard.map((row, key) => (
        <div className="row-container" key={key}>
          {row.map((key, index) => (
            <div
              className="keyboard--key"
              key={`${index}-${key}`}
              onClick={SetInputValue}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
      <div className="keyboard--lastRow">
        <div className="keyboard--key" onClick={SetInputValue}>
          0
        </div>
        <div className="keyboard--submit" onClick={CheckAnswer}>
          Go
        </div>
      </div>
    </div>
    </>

  );
}

export default KeyBoard;
