import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "../data/projects.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <Row>
      {projectsData.map((project) => (
        <Col key={project.id} xs={12} sm={6} md={4} className="mb-4">
          <Card className="project-card h-100 shadow-sm">
            <Card.Img variant="top" src={project.image} alt={project.title} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.shortDescription}</Card.Text>
              {/* Placeholder for more detailed project information */}
              <div className="project-details mt-auto">
                <p>
                  {/* Insert your detailed explanation about this project here */}
                  More info about this project...
                </p>
              </div>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Card.Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;
