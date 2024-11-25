import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import { CHARACTER_URL } from "./constants";
import "./app.css";

function App() {
  const [clickedChar, setClickedChar] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // za domaci, odraditi prev page
  // probajte da dodate dugmice [prev, 1, 2, 3, next]
  // ako se klikne na 3 -> izgledace ovako [prev, 2, 3, 4, next]
  // kliknuto dugme mora uvek biti u sredini
  // dodatno: refaktorisati [data, setData] -> tako da imamo i informacije o stranicama
  // odnosno imali bismo [characters, setCharacters] -> data.results
  // [pages, setPages] -> data.info ili postaviti kao konstantu broj max stranica

  useEffect(() => {
    fetch(CHARACTER_URL + `?page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [page]);

  const handleNextPageChange = () => {
    if (page >= 1 && page <= 42) {
      setPage(page);
    }
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPageChange = () => {
    if (page >= 1 && page <= 42) {
      setPage(page);
    }
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
          page={page}
        />
      ) : (
        <SinglePage clickedChar={clickedChar} setClickedChar={setClickedChar} />
      )}
    </div>
  );
}

export default App;
