import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

//Create popup with dynamically changed info from box to box
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className ="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/></Link>

    </div>
);

// create a component to be recycled at each "stage"
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Dane Cronin</span> 👋
            <br/>
            A Full-Stack Developer in Colorado.
        </h1>
    ),
    2: (
        <InfoBox
        text="I am very interested in developing new skills"
        link="/about"
        btnText="Learn More"/>
    ),
    3: (
        <InfoBox
        text="Want to see some of my other projects?"
        link="/projects"
        btnText="View Portfolio"/>
    ),
    4: (
        <InfoBox
        text="Looking for a developer or need help on a project? Get in touch!"
        link="/contact"
        btnText="Say Hello"/>
    ),

}



const HomeInfo = ({currentStage}) => {
    // Check the current stage and only render that content of the currentStage or return nothing
  return renderContent[currentStage] || null;
}

export default HomeInfo;
