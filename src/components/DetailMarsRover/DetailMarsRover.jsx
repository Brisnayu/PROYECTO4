import "./DetailMarsRover.css";

import ImagesMars from "../../components/ImagesMars/ImagesMars";
import TextMars from "../../components/TextMars/TextMars";

import ButtonMarsRover from "../../components/ButtonMarsRover/ButtonMarsRover";

const DetailMarsRover = ({
  selectButton,
  infoMars,
  setSelectButton,
  buttonCamera,
  date,
  dateRover,
}) => {
  return (
    <>
      <section className="container-mars">
        <ImagesMars selectButton={selectButton} infoMars={infoMars} />

        <div className="text-mars">
          <h2>Mars Rover Photos: Curiosity</h2>

          <TextMars date={date} dateRover={dateRover} infoMars={infoMars} />

          <h3>Choose a camera</h3>

          <ButtonMarsRover
            infoMars={infoMars}
            setSelectButton={setSelectButton}
            buttonCamera={buttonCamera}
          />

          <button className="show-all" onClick={() => setSelectButton("All")}>
            Show all
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailMarsRover;
