import "./SelectApi.css";

const SelectApi = ({ setSelectApi, setDate, today, yesterday }) => {
  return (
    <div className="input-nasa-api">
      <label htmlFor="api-nasa">
        <h3>APOD / MARS ROVER</h3>
      </label>
      <select
        id="changeApi"
        onChange={(event) => {
          setSelectApi(event.target.value);
          event.target.value === "API-APOD"
            ? setDate(today)
            : setDate(yesterday);
        }}
      >
        <option value="API-APOD">API APOD</option>
        <option value="API-mars-rovers">API Mars Rovers</option>
      </select>
    </div>
  );
};

export default SelectApi;
