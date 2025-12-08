import React from "react";
import Nav from "./components/Nav";
import persons from "./people.js";

const Profile = ({ imgSrc, name, role, type }) => {
  return (
    <div className="profileCard">
      <img src={imgSrc} alt="profile-pic" />
      <h3>Name: {
        type === 'employee' && name 
        }</h3>
      <h4>Role: {role}</h4>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Nav />
      <div className="team">
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
    </>
  );
};

export default About;
