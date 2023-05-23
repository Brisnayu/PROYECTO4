import "./TextMars.css";
import { v4 as uuidv4 } from "uuid";

const TextMars = ({ date, infoMars, dateRover }) => {
uuidv4();

  return (
    <div>
      <h4>Fotos correspondientes al día: {date}</h4>
      {infoMars
        ? dateRover.map((dates) => <h4 key={uuidv4()}>{dates}</h4>)
        : null}
    </div>
  );
};

export default TextMars;
