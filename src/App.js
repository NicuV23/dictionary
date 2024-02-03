import React, { useState } from "react";
import "./App.css";

function App() {
  const initial = {
    word: "",
    definition: "",
  };

  const [entry, setEntry] = useState(initial);
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const showTheWord = () => {
    if (entry.word && entry.definition) {
      setEntries([...entries, entry]);
      setEntry(initial);
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
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
        <div className="inputs">
          <h1>Word:</h1>
          <input
            type="text"
            placeholder="Type..."
            value={entry.word}
            onChange={handleChange}
            name="word"
          />

          <h1>Definition:</h1>
          <input
            type="text"
            placeholder="Type..."
            value={entry.definition}
            onChange={handleChange}
            name="definition"
          />

          <button onClick={showTheWord}>Show</button>
        </div>

        <input
          className="search"
          type="text"
          placeholder="Search words..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="display" id="displayArea">
          {filteredEntries.map((entry, index) => (
            <div key={index}>
              <h1>{entry.word}:</h1>
              <h4>{entry.definition}</h4>
              <button onClick={() => deleteEntry(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
