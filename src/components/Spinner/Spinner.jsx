import "./Spinner.css";

import iconCatSpinner from "../../assets/cat-spinner.jpg";

const Spinner = () => {
  return (
    <section className="section-spinner">
      <img className="spinner" src={iconCatSpinner} alt="cat-spinner" />
    </section>
  );
};

export default Spinner;
