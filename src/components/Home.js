import React from 'react';
import NavBar from './NavBar';
import Features from './Features';
import About from './About';
import FeatureB from './FeatureB';
import UseScreenSize from './Hooks/UseScreenSize';
import HeroImage from '../assets/images/hero.svg';
import HeroImageV2 from '../assets/images/heroInvoice2.png';
import BG from '../assets/images/Bg.svg';
import BgMobile from '../assets/images/BgMobile.png';
import Bg from '../assets/images/Bg.png';


const Home = () => {

    const screenSize = UseScreenSize();

    return (
        <section className="home-page-wrapper">
                <div className="graphic-bg">
                 <img className="graphic-shape" src={screenSize <=376?BgMobile:Bg}/>
                </div>
             
                <NavBar/>
                
                 <div className="hero-section">
                  
                     <div className="container">
                        <div className="hero-img-container">
                         <img className="hero-img" src={screenSize < 767? HeroImage: HeroImageV2} alt="hero"/>
                        </div>
                      
                      <div className="hero-content">
                          <h1>Make Your Business Easier & <span> Simple</span></h1>
                          <p className="leading-text text-center text">The poster concept but the never back we to and desk noise towards never of thought, of merit business least exerted considerable.</p>
                          <button className="btn btn-primary"> Try Free Trial </button> 
                      </div>

                   </div> 

                   <img className="bg-hero-shape" src={BG} alt="shape background" />
                    
                </div> 

                <Features/>
                <About/>
                <FeatureB/>
              
               <footer className="main-footer">
                   <div className="footer-content">
                       <p>Copyright © 2021 OX . All rights reserved.</p>
                        <div className="footer-btn-container">
                            <button className="btn-link">Sign Up</button>
                           
                        </div>
                      
                   </div>
               </footer>

        </section>
    )
}

export default Home;
