import "./Home.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

import Purpose from "../../components/Purpose/Purpose";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <main>
      {user !== null ? (
        Purpose()
      ) : (
        <div className="container">
          <input
            title="You can input a maximum of 6 letters"
            maxLength="6"
            placeholder="Please enter your name..."
            type="text"
            onInput={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={() => {
              if (inputValue === "") {
                alert("Please enter your name to begin");
              } else {
                setUser(inputValue);
              }
            }}
          >
            🛰️ Start 👨🏼‍🚀
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
