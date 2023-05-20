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
            placeholder="Introduce tu nombre"
            type="text"
            onInput={(event) => setInputValue(event.target.value)}
          />
          <button onClick={() => setUser(inputValue)}>🛰️ Iniciar 👨🏼‍🚀</button>
        </div>
      )}
    </main>
  );
};

export default Home;
