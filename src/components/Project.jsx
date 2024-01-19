import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import projectsData from '../data/projects.json';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Projects() {
    return (
        <div>
        {projectsData.map((project) => (
            <Card style={{ width: '18rem' }} key={project.id}>
            <Card.Img variant="top" src={project.image} alt={project.title} className="d-block" />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                {project.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><Card.Link href={project.link}>Website link</Card.Link></ListGroup.Item>
                <ListGroup.Item><Card.Link href={project.github}>Github link</Card.Link></ListGroup.Item>
            </ListGroup>
            </Card>
        ))}
        </div>
    );
}




export default Projects;
