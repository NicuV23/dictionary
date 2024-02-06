import React, { useMemo } from "react";
import Word from "../word/Word";

const WordList = ({ filteredEntries, deleteEntry }) => {
  const list = useMemo(() => {
    return filteredEntries.map((entry, index) => (
      <Word entry={entry} index={index} deleteEntry={deleteEntry} />
    ));
  }, [filteredEntries.length]);

  return (
    <div className="display" id="displayArea">
      {list}
    </div>
  );
};

export default WordList;
