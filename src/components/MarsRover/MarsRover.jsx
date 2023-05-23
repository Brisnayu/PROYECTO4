import "./MarsRover.css";
import { useEffect } from "react";

import ImagesMars from "../../components/ImagesMars/ImagesMars";
import TextMars from "../../components/TextMars/TextMars";

import {
  createButton,
  buttonCamera,
  dateRover,
} from "../../textData/CreateButton";
import ButtonMarsRover from "../../components/ButtonMarsRover/ButtonMarsRover";

const MarsRover = ({ infoMars, selectButton, setSelectButton, date }) => {
  createButton(infoMars);

  useEffect(() => {
    createButton(infoMars);
  }, [infoMars]);

  return (
    <>
      <section className="container-mars">
        <ImagesMars selectButton={selectButton} infoMars={infoMars} />

        <div className="text-mars">
          <h2>Mars Rover Photos: Curiosity</h2>

          <TextMars date={date} dateRover={dateRover} infoMars={infoMars} />

          <h3>Selecciona una cámara</h3>

          <ButtonMarsRover
            infoMars={infoMars}
            setSelectButton={setSelectButton}
            buttonCamera={buttonCamera}
          />

          <button
            className="show-all"
            onClick={() => setSelectButton("All")}
          >
            Mostrar todo
          </button>
        </div>
      </section>
    </>
  );
};

export default MarsRover;