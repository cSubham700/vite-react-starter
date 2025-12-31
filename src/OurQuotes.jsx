import React, { useState } from "react";
import Nav from "./components/Nav";
import quotes from "./quotes.js";

const OurQuotes = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < quotes.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const quote = quotes[index];

  return (
    <>
      <Nav />
      <div className="quotes">
        
        {/* Buttons */}
        <div className="btns">
          <button onClick={handlePrev} disabled={index === 0}>
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={index === quotes.length - 1}
          >
            Next
          </button>
        </div>

        {/* Content */}
        <img src={quote.image} alt={quote.title} />
        <h3>{quote.title}</h3>
        <h4>
          {index + 1} of {quotes.length}
        </h4>
        <p>{quote.description}</p>
      </div>
    </>
  );
};

export default OurQuotes;
