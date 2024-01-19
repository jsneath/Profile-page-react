import React from 'react';
import NavBar from '../components/Header'; // Adjust the path according to your project structure
// import './HomePage.css'; // If you have a specific CSS file for the HomePage

function ContactPage() {
    

    return (
        <>
        <NavBar />
        
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:your-email@example.com">jamessneath1@gmail.com</a></p>
            <p>CV: <a href="../public/james-sneath.pdf" target="_blank" rel="noopener noreferrer">Download CV</a></p>
            <p>GitHub: <a href="https://github.com/jsneath" target="_blank" rel="noopener noreferrer">github.com/jsneath</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/james-sneath" target="_blank" rel="noopener noreferrer">linkedin.com/in/james-sneath</a></p>
        </div>
        </>
   
    );
}

export default ContactPage;