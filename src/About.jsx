import React from "react";
import Nav from "./components/Nav";

const Profile = ({ imgSrc, name, role }) => {
  return (
    <div className="profileCard">
      <img src={imgSrc} alt="profile-pic" />
      <h3>Name: {name}</h3>
      <h4>Role: {role}</h4>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Nav />
      <div className="team">
        <Profile
          imgSrc={
            "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
          }
          name={"John Doe"}
          role={"Frontend Web Developer"}
        />

        <Profile
          imgSrc={
            "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/http%3A%2F%2Fplacebeard.it%2F250%2F250"
          }
          name={"Luke Harper"}
          role={"Backend Web Developer"}
        />

        <Profile
          imgSrc={
            "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fi.pravatar.cc%2F250%3Fu%3Dmail%40ashallendesign.co.uk"
          }
          name={"Kane Williams"}
          role={"UI/UX designer"}
        />
      </div>
    </>
  );
};

export default About;
