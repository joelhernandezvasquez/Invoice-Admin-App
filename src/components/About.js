import React from 'react';
import AboutImg from '../assets/images/Image21.png';
import RectangleUpperShape from '../assets/images/RectangleUpperAbout.svg';
import RectangleBottomShape from '../assets/images/rectangleBottomAbout.svg';

const About = () => {
    return (
        <section className="about-section">
          <div className="container">
             <div className="about-image-container">
                 <img className="dashboard-about-img" src={AboutImg} alt="dashboard img"/>
                 <img className="shapeRectangleA" src={RectangleUpperShape} alt="shape"/>
             </div>
             <div className="description-container">
                 <h2 className="section-title text-center"> Increase Your Business Growth & Sale</h2>
                 <p className="leading-text text-center">Seven from by my incentive the exerted each briefs make weather. Of surprise roman yes, either seemed I it amped make of very both and if the is neuter. Pros in two differences parents begin snapped future are of subdued her acquired in that tones.</p>
                 <button className="btn btn-primary"> Read More</button> 
                 <img className="shapeRectangleB" src={RectangleBottomShape} alt = "rectangle shape"/>
                
             </div>
          </div>
        </section>
    )
}

export default About;
