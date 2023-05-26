import "./NotFound.css";
import catNotFound from "../../assets/cat-not-found.gif";

const NotFound = () => {
  return (
    <main>
      <article className="container-not-found">
        <img className="not-found" src={catNotFound} alt="gif-cat-not-found" />
        <h2>¡Page not found!</h2>
      </article>
    </main>
  );
};

export default NotFound;
