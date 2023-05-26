import "./MarsRover.css";
import { useEffect } from "react";

import {
  createButton,
  buttonCamera,
  dateRover,
} from "../../infoExtra/CreateButton";

import DetailMarsRover from "../DetailMarsRover/DetailMarsRover";
import Spinner from "../Spinner/Spinner";

const MarsRover = ({
  infoMars,
  selectButton,
  setSelectButton,
  date,
  showspinner,
}) => {
  createButton(infoMars);

  useEffect(() => {
    createButton(infoMars);
  }, [infoMars]);

  return (
    <section className="info-mars">
      {showspinner === false ? (
        <Spinner />
      ) : infoMars.length === 0 ? (
        <div className="container-spinner">
          <Spinner />
          <h5>
            I apologize for the inconvenience. It appears that the information
            was not updated as expected. Please try again with a different date.
            🫠
          </h5>
        </div>
      ) : (
        <DetailMarsRover
          infoMars={infoMars}
          selectButton={selectButton}
          setSelectButton={setSelectButton}
          buttonCamera={buttonCamera}
          date={date}
          dateRover={dateRover}
        />
      )}
    </section>
  );
};

export default MarsRover;
