import NavBar, { Jumbotron } from "../components/Header"; // Adjust the path according to your project structure
import AutoplayCarousel from "../components/AutoplayCarousel";

import "../App.css";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <NavBar />
        <Jumbotron />
        <br />
        <AutoplayCarousel />
        {/* <div className="home-content">
        <p className="description">
          I'm a passionate Front-End Developer focused on React, building
          interactive, user-friendly web apps with HTML, CSS, and JavaScript. I
          create responsive interfaces that enhance user experiences and thrive
          in dynamic, innovative teams where I can continuously learn and
          contribute.
        </p>
      </div> */}
      </div>
    </>
  );
}

export default HomePage;
