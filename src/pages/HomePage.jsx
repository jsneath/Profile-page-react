import React from 'react';
import NavBar, { Jumbotron} from '../components/header'; // Adjust the path according to your project structure

import '../App.css';
import myImage from '../assets/-1tgddd.jpg';

function HomePage() {
    return (
        <div className="homePage">
            <NavBar /> 
            <Jumbotron />
            <img src={myImage} alt="A picture of me" className="profile-image" />
            <div>
                <br />
                <p>"As an aspiring Front End Web Developer with a keen interest in React, 
                I am passionate about creating interactive and user-friendly web applications. 
                With foundational skills in HTML, CSS, JavaScript, and a growing expertise in React, I am enthusiastic about building responsive interfaces that enhance user experiences. 
                I am eager to apply my knowledge and adapt quickly in a dynamic team environment, contributing to impactful projects while continuously advancing my skills. 
                My goal is to join an organization where innovation and continuous learning are valued, allowing me to grow as a professional in the exciting field of web development."</p>
            </div>
        </div>
    );
}

export default HomePage;