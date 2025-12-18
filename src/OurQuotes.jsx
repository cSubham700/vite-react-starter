import React, { useState } from "react";
import Nav from "./components/Nav";
import quotes from "./quotes.js";

const OurQuotes = () => {
  const [Index, setIndex] = useState(0);

  function handleClick() {
    setIndex(Index + 1);
  }

  function handlePrev() {
    setIndex(Index - 1);
  }

  let quote = quotes[Index];

  return (
    <>
      <Nav />
      <div className="quotes">
        <button
          onClick={handleClick}
          disabled={Index < 3 || Index === 3 ? false : true}
        >
          Next
        </button>
        <button
        onClick={handlePrev}
        disabled={Index > 1 || Index === 1 ? false : true}
        >Prev</button>
        <img src={quote.image} alt="" />
        <h3>{quote.title}</h3>
        <h4>
          {Index + 1} of {quotes.length}
        </h4>
        <p>{quote.description}</p>
      </div>
    </>
  );
};

export default OurQuotes;
