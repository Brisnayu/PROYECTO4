import "./ButtonMarsRover.css";
import { v4 as uuidv4 } from "uuid";

const ButtonMarsRover = ({ infoMars, setSelectButton, buttonCamera }) => {
    uuidv4();
    
    return (
        <div className="container-button">
        {infoMars
          ? buttonCamera.map((button) => (
              <button key={uuidv4()} onClick={(event) => setSelectButton(button)}>
                {button}
              </button>
            ))
          : null}
      </div>
    )
}

export default ButtonMarsRover;