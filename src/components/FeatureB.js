import React from 'react';
import FeatureCard from './FeatureCard';
import FeatureBImg from '../assets/images/featureB.png';
import iconExperience from '../assets/images/icon2.svg';
import iconSupport from '../assets/images/icon3.svg';


const FeatureB = () => {
    return (
        <section className="feature-B-section">
            <div className="container">
                <div className="featureB-header">
                   <img src={FeatureBImg} alt = "feature image"/>
                </div>
                <div className="featureB-content-container">
                    <div className="header-content">
                        <h2 className="section-title text-center">Perfect Solutio For Small Business</h2>
                        <p className="leading-text text-center">Our powerfull AI tool organizes sales reports for daily, weekly, monthly and overall yearly. Which leads less human works and maintenenceIt is a long established fact that a reader.</p>
                    </div>
                    <div className = "featureA-content">
                     <FeatureCard
                      thumbnailIcon = {iconExperience}
                      title="Expert User Experience"
                      content = "It when a its fame. To the still a of and contrast."
                     />
                    </div>

                    <div className = "featureB-content">
                     <FeatureCard
                      thumbnailIcon = {iconSupport}
                      title="24/7 Support"
                      content = "It when a its fame. To the still a of and contrast."
                     />
                    </div>

                    <button className="btn btn-primary">View Service</button>
                </div>
            </div>
        </section>
    )
}

export default FeatureB;