import "./Purpose.css";
import { textData } from "../../infoExtra/TextData";
import { v4 as uuidv4 } from "uuid";

const Purpose = () => {

  return (
    <div className="container-home">
      <h2>{textData.title}</h2>
      <p>{textData.context}</p>
      <br />
      <ul>
        <h3>Goals</h3>
        {textData.points.map((point, index) => (
          <li key={uuidv4()}>{point}</li>
        ))}
      </ul>
      <br />
      <h3>What is the AID section?</h3>
      <p>
        It is an abbreviation for Astronomical Image of the Day, so let's go for
        it!
      </p>
    </div>
  );
};

export default Purpose;
