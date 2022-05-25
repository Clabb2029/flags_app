import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>About</h1>
            <p className='aboutText'>This is a test to integrate an API and exploit the received data via filters.</p>
        </div>
    );
};

export default About;