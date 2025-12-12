import React, { useState } from "react";
import Nav from "./components/Nav";

const MyButton = ({ onSmash, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
};

const MyCount = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);

    setTimeout(() => {
      alert(count);
    }, 3000);

    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+3</button>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <h1>Home Page</h1>

        <MyCount />

        <div
          className="home-button-div"
          onClick={() => alert("Parent div clicked")}
        >
          <MyButton onSmash={() => alert("Uploading")}>Upload image</MyButton>
          <MyButton onSmash={() => alert("Playing")}>Play music</MyButton>
        </div>
      </div>
    </>
  );
};

export default Home;
