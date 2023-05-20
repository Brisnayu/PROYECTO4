import "./MarsRover.css";
import { v4 as uuidv4 } from "uuid";

const MarsRover = ({ infoMars, selectButton, setSelectButton }) => {

  uuidv4();

  const buttonCamera = [];
  const dateRover = [];

  const createButton = () => {
    infoMars.forEach((info) => {
      if (!dateRover.includes(`Fecha del día: ${info.earth_date}`)) {
        dateRover.push(`Fecha del día: ${info.earth_date}`);
      }
      if (
        !dateRover.includes(`Fecha de aterrizaje: ${info.rover.landing_date}`)
      ) {
        dateRover.push(`Fecha de aterrizaje: ${info.rover.landing_date}`);
      }
      if (
        !dateRover.includes(`Fecha de lanzamiento: ${info.rover.launch_date}`)
      ) {
        dateRover.push(`Fecha de lanzamiento: ${info.rover.launch_date}`);
      }

      if (!buttonCamera.includes(info.camera.name)) {
        buttonCamera.push(info.camera.name);
      }
    });
  };

  createButton();

  return (
    <>
      <section className="container-mars">
        <div className="img-mars">
          {selectButton === "All"
            ? infoMars.map((item, index) => (
                <div key={uuidv4()}>
                  <img src={item.img_src} alt={item.camera.full_name} />
                </div>
              ))
            : infoMars
                .filter((item) => item.camera.name === selectButton)
                .map((photosFilter) => (
                  <div key={uuidv4()}>
                    <img
                      src={photosFilter.img_src}
                      alt={photosFilter.camera.full_name}
                    />
                  </div>
                ))}
        </div>
        <div className="text-mars">
          <h2>Mars Rover Photos: Curiosity</h2>
          <div>
            {infoMars
              ? dateRover.map((dates, index) => <h4 key={uuidv4()}>{dates}</h4>)
              : null}
          </div>

          <h3>Selecciona una cámara</h3>

          <div className="container-button">
            {infoMars
              ? buttonCamera.map((button) => (
                  <button key={uuidv4()} onClick={(event) => setSelectButton(button)}>
                    {button}
                  </button>
                ))
              : null}
          </div>
          <button className="show-all" onClick={(event) => setSelectButton("All")}>Mostrar todo</button>
        </div>
      </section>
    </>
  );
};
export default MarsRover;

/* <section className="container-mars">
<div className="img-mars">
  {infoMars.photos.map((item, index) => (
    <div key={index + "item"}>
      <img src={item.img_src} alt={item.camera.full_name}/>
    </div>
  ))}
</div>
<div className="text-mars">
  <h2>Mars Rover Photos: Curiosity</h2>
  <div>
    <h3>Fecha de la tierra: <span>{infoMars.photos[0].earth_date}</span></h3>
    <h3>
      Fecha de aterrizaje: <span>{infoMars.photos[0].rover.landing_date}</span>
    </h3>
    <h3>
      Fecha de lanzamiento: <span>{infoMars.photos[0].rover.launch_date}</span>
    </h3>
    <h2>Información Cámara</h2>
    <p>Nombre completo: {infoMars.photos[0].camera.full_name}</p>
    <p>Abreviatura: {infoMars.photos[0].camera.full_name}</p>
    <p>Estado: {infoMars.photos[0].rover.status}</p>
  </div>
</div>
</section> */

// {NASA_INFO.photos.map((item, index) => (
//   <div key={index + "item"}>
//     <h3>Fecha de la tierra: {item.earth_date}</h3>
//     <h3>Fecha de aterrizaje: {item.rover.landing_date}</h3>
//     <h3>Fecha de lanzamiento: {item.rover.launch_date}</h3>
//     <p>Estado: {item.rover.status}</p>
//     {console.log(item)}
