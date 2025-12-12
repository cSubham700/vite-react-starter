import React, { useState } from "react";
import Nav from "./components/Nav";
import persons from "./people.js";

const Contact = () => {
  const [inSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "name@email",
  });

  function sendMessage() {
    // random function
  }

  function handleData(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  if (inSent) return <h3>{message}</h3>;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          sendMessage(message);
        }}
      >
        <div className="contact">
          <h2>Contat Us</h2>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          First name:{" "}
          <input
            type="text"
            value={person.firstName}
            onChange={handleData}
            name="firstName"
          />
        </label>
        <label>
          Last name:{" "}
          <input
            type="text"
            value={person.lastName}
            onChange={handleData}
            name="lastName"
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            value={person.email}
            onChange={handleData}
            name="email"
          />
        </label>
        <p>
          {person.firstName} {""} {person.lastName} <br /> {person.email}
        </p>
      </div>
    </>
  );
};

const Profile = ({ imgSrc, name, role, type }) => {
  return (
    <div className="profileCard">
      <img src={imgSrc} alt="profile-pic" />
      <h3>Name: {type === "employee" && name}</h3>
      <h4>Role: {role}</h4>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Nav />
      <div className="team">
        <div>
          {persons.map((person) => {
            return (
              <Profile
                key={person.id}
                imgSrc={person.imgSrc}
                name={person.name}
                role={person.role}
                type={person.type}
              />
            );
          })}
        </div>

        <Contact />
      </div>
    </>
  );
};

export default About;
