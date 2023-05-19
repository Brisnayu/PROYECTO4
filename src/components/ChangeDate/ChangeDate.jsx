import "./ChangeDate.css";

const ChangeDate = ({ date, today, setDate, setSelectButton }) => {
  return (
    <>
      <input
        type="date"
        value={date}
        max={today}
        min="2020-01-01"
        onInput={(event) => {
          setDate(event.target.value.toLocaleString()),
          setSelectButton("All")
        }}
      />
    </>
  );
};

export default ChangeDate;
