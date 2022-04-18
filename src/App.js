import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./scores";
import Header from "./Header";
import ToggleButton from "./ToggleButton";
import TableDescending from "./TableDescending";
import TableAscending from "./TableAscending";

function App() {
  const [sortScore, setSortScore] = useState(true);

  function changeOrder() {
    setSortScore((prevState) => !prevState);
  }

  return (
    <div className="App">
      <Header />
      <ToggleButton changeOrder={changeOrder} />
      {sortScore ? (
        <TableDescending data={allCountryScores} />
      ) : (
        <TableAscending data={allCountryScores} />
      )}
    </div>
  );
}

export default App;
