import "./ChangeDate.css";

const ChangeDate = ({ date, today, yesterday, setDate, setSelectButton, selectApi }) => {
  return (
    <div className="input-nasa-date">
      <label htmlFor="date-api">
        <h3>Please indicate the date:</h3>
      </label>
      <input
        type="date"
        value={date}
        max={selectApi === "API-APOD" ? today : yesterday}
        min="2020-01-01"
        onInput={(event) => {
          setDate(event.target.value.toLocaleString()), setSelectButton("All");
        }}
      />
    </div>
  );
};

export default ChangeDate;
