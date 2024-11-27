import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import { CHARACTER_URL } from "./constants";
import "./app.css";

function App() {
  const [clickedChar, setClickedChar] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(CHARACTER_URL + `?page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [page]);

  const handleNextPageChange = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPageChange = () => {
    setPage((nextPage) => nextPage - 1);
  };

  return (
    <div className="App">
      {!clickedChar ? (
        <HomePage
          characters={data}
          setClickedChar={setClickedChar}
          nextPage={handleNextPageChange}
          prevPage={handlePrevPageChange}
          setPage={setPage}
          page={page}
        />
      ) : (
        <SinglePage clickedChar={clickedChar} setClickedChar={setClickedChar} />
      )}
    </div>
  );
}

export default App;
