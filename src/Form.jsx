import React, { useState } from "react";
import Nav from "./components/Nav";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);

      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <Nav />
      <div className="home">
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            disabled={status === "submitting"}
            value={answer}
            onChange={handleTextareaChange}
          />{" "}
          <br />
          <button disabled={status.length === 0 || status === "submitting"}>
            Submit
          </button>
          {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
          {status === "success" && <p>{"That's right!"}</p>}
        </form>
      </div>
    </>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default Form;
