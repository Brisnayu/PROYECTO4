import "./Content.css";

import { useEffect, useState } from "react";

import ChangeDate from "../../components/ChangeDate/ChangeDate";
import SelectApi from "../../components/SelectApi/SelectApi";
import APOD from "../../components/APOD/APOD";
import MarsRover from "../../components/MarsRover/MarsRover";

import { today, dateMars, yesterday } from "../../infoExtra/DateFetchApi";
import { NASA_URL } from "../../infoExtra/NasaData";

const Content = () => {
  dateMars();

  const [date, setDate] = useState(today);
  const [selectApi, setSelectApi] = useState("API-APOD");

  const [infoDay, setInfoDay] = useState([]);
  const [infoMars, setInfoMars] = useState([]);

  const [selectButton, setSelectButton] = useState("All");

  const [showspinner, setShowspinner] = useState(false);

  const NASA_API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;
  const APOD_URL = `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;
  const MARS_URL = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${date}`;

  useEffect(() => {
    if (selectApi === "API-APOD") {
      fetch(APOD_URL)
        .then((res) => res.json())
        .then((res) => {
          setInfoDay(res);
        })
        .catch((error) => {
          alert("NO HAY INFORMACIÓN DE ESE DÍA");
        });
    } else {
      fetch(MARS_URL)
        .then((res) => res.json())
        .then((res) => {
          setInfoMars(res.photos);
          setShowspinner(true);
        })
        .catch((error) => {
          alert("NO HAY INFORMACIÓN DE ESE DÍA");
        });
    }
  }, [date]);

  return (
    <main>
      <article className="container-info">
        <section className="input-nasa">
            <ChangeDate
              date={date}
              today={today}
              setDate={setDate}
              setSelectButton={setSelectButton}
              yesterday={yesterday}
              selectApi={selectApi}
            />
            <SelectApi
              setSelectApi={setSelectApi}
              setDate={setDate}
              today={today}
              yesterday={yesterday}
            />
        </section>

        {selectApi === "API-APOD" ? (
          <APOD date={date} infoDay={infoDay} />
        ) : (
          <MarsRover
            infoMars={infoMars}
            selectButton={selectButton}
            setSelectButton={setSelectButton}
            date={date}
            showspinner={showspinner}
          />
        )}
      </article>
    </main>
  );
};

export default Content;
