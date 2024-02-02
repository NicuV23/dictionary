import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [entries, setEntries] = useState([]);

  const showTheWord = () => {
    if (word && definition) {
      setEntries([...entries, { word, definition }]);

      setWord("");
      setDefinition("");
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <>
      <div className="inputs">
        <h1>Word:</h1>
        <input
          type="text"
          placeholder="Type..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <h1>Definition:</h1>
        <input
          type="text"
          placeholder="Type..."
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />

        <button onClick={showTheWord}>Show</button>
      </div>

      <div id="displayArea">
        {entries.map((entry, index) => (
          <div key={index}>
            <h1>{entry.word}:</h1>
            <h4>{entry.definition}</h4>
            <button onClick={() => deleteEntry(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
