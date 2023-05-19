import "./SelectApi.css";

const SelectApi = ({ setSelectApi }) => {
  return (
    <>
      <select
        name=""
        id="changeApi"
        onChange={(event) => setSelectApi(event.target.value)}
      >
        <option value="API-APOD">API APOD</option>
        <option value="API-mars-rovers">API Mars Rovers</option>
      </select>
    </>
  );
};

export default SelectApi;
