import { Card } from "../../components/Card/Card";
import "./home-page.css";

export const HomePage = ({ characters, setClickedChar, nextPage, prevPage, page }) => {
  return (
    <>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => {prevPage()}}>Prev</button>
        <button onClick={() => nextPage()} disabled={page === 42}>
          Next
        </button>
      </div>
      <div className="cards-wrapper">
        {characters.map((char) => {
          return <Card character={char} setClickedChar={setClickedChar} />;
        })}
      </div>
    </>
  );
};
