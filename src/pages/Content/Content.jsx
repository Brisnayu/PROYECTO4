import "./Content.css";

import React, { useEffect, useState } from "react";

import ChangeDate from "../../components/ChangeDate/ChangeDate";
import SelectApi from "../../components/SelectApi/SelectApi";
import APOD from "../../components/APOD/APOD";
import MarsRover from "../../components/MarsRover/MarsRover";

const Content = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  let ayer;

  let prueba = new Date();
  let day = prueba.getDate() - 1;
  let month = prueba.getMonth() + 1;
  let year = prueba.getFullYear();

  if (month < 10) {
    ayer = `${year}-0${month}-${day}`;
  } else {
    ayer = `${year}-${month}-${day}`;
  }

  const [date, setDate] = useState(today);
  const [selectApi, setSelectApi] = useState("API-APOD");

  const [selectButton, setSelectButton] = useState("All");

  const [infoDay, setInfoDay] = useState([]);
  const [infoMars, setInfoMars] = useState([]);

  const NASA_URL = "https://api.nasa.gov/";
  

  let URL_API;
  const APOD_URL = `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;
  const MARS_URL = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${date}`;

  // console.log(today[9] - 1)

  useEffect(() => {
    if (selectApi === "API-APOD") {
      fetch(APOD_URL)
        .then((res) => res.json())
        .then((res) => {
          setInfoDay(res);
          // console.log(res);
          // console.log("el dia es", date);
        })
        .catch((err) => {
          alert("NO HAY INFORMACIÓN DE ESE DÍA");
        });
    } else {
      fetch(MARS_URL)
        .then((res) => res.json())
        .then((res) => {
          console.log("aquí estoy dentro del fetch", res.photos);
          setInfoMars(res.photos);
        })
        .catch(() => {
          alert("NO HAY INFORMACIÓN DE ESE DÍA");
        });
    }
  }, [date]);

  return (
    <main>
      <article className="container-info">
        <section className="input-nasa">
          <div className="input-nasa-date">
            <label>
              <h3>Consulta otra fecha</h3>
              </label>
            <ChangeDate
              date={date}
              today={today}
              setDate={setDate}
              setSelectButton={setSelectButton}
            />
          </div>
          <div className="input-nasa-api">
            <label>
              <h3>APOD / MARS ROVER</h3>
            </label>
            <select
              name=""
              id="changeApi"
              onChange={(event) => {
                setSelectApi(event.target.value);
                event.target.value === "API-APOD"
                  ? setDate(today)
                  : setDate(ayer);
              }}
            >
              <option value="API-APOD">API APOD</option>
              <option value="API-mars-rovers">API Mars Rovers</option>
            </select>
          </div>
        </section>

        {selectApi === "API-APOD" ? (
          <APOD date={date} infoDay={infoDay} />
        ) : (
          <MarsRover
            infoMars={infoMars}
            selectButton={selectButton}
            setSelectButton={setSelectButton}
          />
        )}
      </article>
    </main>
  );
};

export default Content;
