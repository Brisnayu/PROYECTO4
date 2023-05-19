import { useEffect } from "react";

const FetchApi = ({date, setInfoDay}) => {
  const NASA_URL = "https://api.nasa.gov/";
  

  let URL_API;
  const APOD_URL = `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;
  const MARS_URL = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${date}`;

  useEffect(
    (URL_API) => {
      fetch(URL_API)
        .then((res) => res.json())
        .then((res) => {
          setInfoDay(res);
        })
        .catch(() => {
          alert("NO HAY INFORMACIÓN DE ESE DÍA");
        });
    },
    [date]
  );
};




  // useEffect(() => {
  //   fetch(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setInfoDay(res);
  //     })
  //     .catch(() => {
  //       alert("NO HAY INFORMACIÓN DE ESE DÍA");
  //     });
  // }, [date]);

  //   useEffect(() => {
  //   fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log('res', res)
  //       setInfoDay(res)

  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       alert(error.message);
  //     });
  // }, []);