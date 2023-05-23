import "./ChangeDate.css";

const ChangeDate = ({ date, today, setDate, setSelectButton }) => {
  return (
    <div className="input-nasa-date">
      <label htmlFor="date-api">
        <h3>Consulta otra fecha</h3>
      </label>
      <input
        type="date"
        value={date}
        max={today}
        min="2020-01-01"
        onInput={(event) => {
          setDate(event.target.value.toLocaleString()), setSelectButton("All");
        }}
      />
    </div>
  );
};

export default ChangeDate;
