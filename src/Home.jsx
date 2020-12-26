import React from 'react'
import web from '../src/img/home1.png'
import Common from './Common'

const Home = () => {
    return (
        <React.Fragment>
            <Common name="Grow your Business" ab2="We are team of talented developer making website" imgsrc={web} visit="/service" btnname="Get Started" />
        </React.Fragment>
    );
};

export default Home;