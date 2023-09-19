import React from "react";
import sheepIMG from "../assests/images/sheepImg.png";
import grrenLand from "../assests/images/greenLand.jpeg";
import { useSheepsContext } from "../provider/Counter";

function Sheep() {
  const { isTheCountCorrect } = useSheepsContext();
  const { setIsTheCountCorrect } = useSheepsContext();
  const sheepImage = React.useRef(null);
  const imageClasses = isTheCountCorrect
    ? "sheep_viwer--sheepIMG sheep_viewer__animate"
    : "sheep_viwer--sheepIMG";

  if (isTheCountCorrect) {
    // when the animation complete go and change isTheCountCorrect to false
    setTimeout(() => {
      setIsTheCountCorrect(false);
    }, 2000);
  }

  return (
    <div className="sheep_viewer">
      <img src={grrenLand} className="sheep_viewer__background" alt="land" />

      <img
        ref={sheepImage}
        src={sheepIMG}
        className={imageClasses}
        alt="sheep"
      />
    </div>
  );
}

export default Sheep;
