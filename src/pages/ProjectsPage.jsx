import React from 'react';
import NavBar from '../components/Header'; // Adjust the path according to your project structure
import Projects from '../components/Project';

function ProjectsPage() {
    return (
        <div className="projectsPage">
            <NavBar /> 
            <h4>My latest projects</h4>
            <br />
            <Projects />
        </div>
    );
}

export default ProjectsPage;

