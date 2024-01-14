import React from 'react';
import NavBar from '../components/header'; // Adjust the path according to your project structure
import { Carousel } from 'react-bootstrap';
import projectsData from '../data/projects.json';

function ProjectsPage() {
    return (
        <div className="projectsPage">
            <NavBar /> 
            <Carousel>
            {projectsData.map((project) => (
                    <Carousel.Item key={project.id}>
                        <img src={project.image} alt={project.title} className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a><br/>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectsPage;