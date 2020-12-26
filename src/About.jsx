import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import web from '../src/img/rythik-PAf9rj_DKCU-unsplash.jpg'
import Common from './Common'

const About = () => {
    return (
        <React.Fragment>
            <Common name="Welcome to About page of" ab2="We are team of talented developer making website" imgsrc={web} visit="/Contact" btnname="Contact Now" />
        </React.Fragment>
    );
};

export default About;