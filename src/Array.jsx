import React, { useState } from "react";
import Nav from "./components/Nav";

let nextId = 0;

let initialArtists = [
  { id: 0, name: "Marta Colvin" },
  { id: 1, name: "Lamidi Olonade" },
  { id: 2, name: "Louise Nevelson" },
];

let initialCounters = [0, 0, 0];

const Array = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const [counters, setCounters] = useState(initialCounters);

  function handleIncrement(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <>
      <Nav />
      <div className="home">
        <h2>Inspiring artists</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={() => {
            setArtists([...artists, { id: nextId++, name: name }]);
          }}
        >
          Add
        </button>

        <ul>
          {artists.map((artist) => {
            return <li key={artist.id}>{artist.name}</li>;
          })}
        </ul>

        <hr style={{ width: "95%" }} />

        <h2>Remove Artists</h2>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name} {""}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <hr style={{ width: "95%" }} />

        <ul>
          {counters.map((counter, i) => (
            <li key={i}>
              {counter}{" "}
              <button
                onClick={() => {
                  handleIncrement(i);
                }}
              >
                +1
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Array;
