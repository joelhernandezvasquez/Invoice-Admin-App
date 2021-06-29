import React from 'react';
import NavBar from './NavBar';
import HeroImage from '../assets/images/hero.svg';
import BG from '../assets/images/Bg.svg';


const Home = () => {
    return (
        <section className="home-page-wrapper">
                <div className="graphic-bg">
                    <div className="upper-line line"></div>
                    <div className="upper-line line"></div> 
                </div>
                <NavBar/>
                
                 <div className="hero-section">
                  
                     <div className="container">
                        <div className="hero-img-container">
                         <img className="hero-img" src={HeroImage} alt="hero"/>
                        </div>
                      
                      <div className="hero-content">
                          <h1>Make Your Business Easier & <span> Simple</span></h1>
                          <p className="leading-text text-center text">The poster concept but the never back we to and desk noise towards never of thought, of merit business least exerted considerable.</p>
                          <button className="btn btn-primary"> Try Free Trial </button> 
                      </div>

                   </div> 

                   <img className="bg-hero-shape" src={BG} alt="shape background" />
                    <div className="bottom-line line"></div>
                </div> 
              
               
           
        </section>
    )
}

export default Home;
