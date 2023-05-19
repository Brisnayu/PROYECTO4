import "./APOD.css";

const APOD = ({ date, infoDay }) => {
  const changeFormat = () => {
    const formatDate = date.split("-");
    return formatDate[2] + "/" + formatDate[1] + "/" + formatDate[0];
  };

  return (
    <>
      <section className="info-nasa">
        <div className="text-nasa">
          <h2>Esta imagen corresponde con la fecha {changeFormat()}</h2>
          <br />
          <h3>{infoDay.title}</h3>
          <p>{infoDay.explanation}</p>
          <br />
          <p className="copyright">
            Copyright: {infoDay.copyright ? infoDay.copyright : "Anonymous"}
          </p>
        </div>

        <div className="img-nasa">
          <h3>Imagen Atronómica del día</h3>
          <img src={infoDay.hdurl} alt={infoDay.title} />
        </div>
      </section>
    </>
  );
};

export default APOD;
