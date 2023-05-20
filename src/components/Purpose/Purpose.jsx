import "./Purpose.css";
import { textData } from "../../textData/TextData";
import { v4 as uuidv4 } from "uuid";

const Purpose = () => {
  uuidv4();

  return (
    <div className="container-home">
      <h2>{textData.title}</h2>
      <p>{textData.context}</p>
      <br />
      <ul>
        <h3>Objetivos</h3>
        {textData.points.map((point, index) => (
          <li key={uuidv4()}>{point}</li>
        ))}
      </ul>
      <br />
      <h3>¿Qué es el apartado IADD?</h3>
      <p>Es una abreviatura para Imagen Astronómica 
        del día, así que ¡A por ello!
      </p>
    </div>
  );
};

export default Purpose;
