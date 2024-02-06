import React from "react";

const Word = ({ index, entry, deleteEntry }) => {
  return (
    <div key={index}>
      <h1>{entry.word}:</h1>
      <h4>{entry.definition}</h4>
      <button onClick={() => deleteEntry(index)}>Delete</button>
    </div>
  );
};

export default Word;
