import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "../data/projects.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// A new component for each project card
function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="project-card h-100 shadow-sm">
      <div className="card-img-container">
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <div className="card-img-overlay">
          <h5 className="overlay-title">{project.title}</h5>
          <button
            className="btn overlay-button"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        {showDetails && (
          <Card.Text className="project-description">
            {project.description}
          </Card.Text>
        )}
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item
          as="a"
          action
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          Website
        </ListGroup.Item>
        <ListGroup.Item
          as="a"
          action
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          GitHub
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function Projects() {
  return (
    <Row>
      {projectsData.map((project) => (
        <Col key={project.id} xs={12} sm={6} md={4} className="mb-4">
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
}

export default Projects;
