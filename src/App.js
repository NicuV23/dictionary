import React, { useState } from "react";
import "./App.css";
import Word from "./components/word/Word";
import Inputs from "./components/inputs/Inputs";
import WordList from "./components/word-list/WordList";

function App() {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const showTheWord = (entry) => {
    if (entry.word && entry.definition) {
      setEntries([...entries, entry]);
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEntries = entries.filter((entry) =>
    entry.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <Inputs showTheWord={showTheWord} />
        <input
          className="search"
          type="text"
          placeholder="Search words..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <WordList filteredEntries={filteredEntries} deleteEntry={deleteEntry} />
      </div>
    </>
  );
}

export default App;
