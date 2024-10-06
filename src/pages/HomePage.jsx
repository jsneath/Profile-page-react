import NavBar, { Jumbotron } from "../components/Header"; // Adjust the path according to your project structure
import AutoplayCarousel from "../components/AutoplayCarousel";

import "../App.css";

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Jumbotron />
      <AutoplayCarousel />
      <div className="home-content">
        <p className="location">Front-End Web Developer</p>
        <p className="location">📍 London, UK</p>
        <p className="description">
          As an aspiring Front End Web Developer with a keen interest in React,
          I am passionate about creating interactive and user-friendly web
          applications. With foundational skills in HTML, CSS, JavaScript, and a
          growing expertise in React, I am enthusiastic about building
          responsive interfaces that enhance user experiences. I am eager to
          apply my knowledge and adapt quickly in a dynamic team environment,
          contributing to impactful projects while continuously advancing my
          skills. My goal is to join an organization where innovation and
          continuous learning are valued, allowing me to grow as a professional
          in the exciting field of web development.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
