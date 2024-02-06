import React, { useState } from "react";

const Inputs = ({ showTheWord }) => {
  const initial = {
    word: "",
    definition: "",
  };

  const [entry, setEntry] = useState(initial);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const addTheWord = () => {
    showTheWord(entry);
    setEntry(initial);
  };

  return (
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

      <button onClick={addTheWord}>Show</button>
    </div>
  );
};

export default Inputs;
