import React from "react";
import NavBar from "../components/Header"; // Adjust the path as needed
import Projects from "../components/Project";
import Container from "react-bootstrap/Container";

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <NavBar />
      {/* Use a fluid container so the layout uses the full width */}
      <Container fluid className="my-5">
        <header className="text-center mb-5">
          <h2>My Latest Projects</h2>
          <p>
            {/* Add your introduction text here */}
            Welcome to my projects page! Below you'll find a selection of my
            latest work.
          </p>
        </header>
        <Projects />
      </Container>
    </div>
  );
}

export default ProjectsPage;
