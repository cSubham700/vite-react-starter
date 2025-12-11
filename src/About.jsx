import React, { useState } from "react";
import Nav from "./components/Nav";
import persons from "./people.js";

const Contact = () => {
  const [inSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  function sendMessage() {
    // random function
  }


  if (inSent) return <h3>{message}</h3>

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <div className="contact">
      <h2>Contat Us</h2>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit">Send</button>
      </div>
    </form>
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

        <div >
        
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
