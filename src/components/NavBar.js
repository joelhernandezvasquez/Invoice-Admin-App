import React,{useState} from 'react';
import Modal from './Modal';
import logoIcon from '../assets/images/logo.svg';

const NavBar = () => {
    
  const [isMenuOpen,setIsMenuOpen] = useState(false);

   const renderMenuIcon = () =>{
    
    if(!isMenuOpen) 
     {
       return(
            <>
            <div className="bar bar1"></div>
           <div className="bar bar2"></div> 
            <div className="bar bar3"></div> 
            </> 
       )
     }

     else{
       return(
         <>
         <div className="bar bar1 close-bar"></div>
         <div className="bar bar3 close-bar"></div> 
         </>
       )
     }
   }

  
   return (
        <nav className="main-nav-bar">
           <div className="container">
             <img className="logo" src={logoIcon} alt ="logo invoicely"/>
             <div className="menu-icon-container" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {renderMenuIcon()}
             </div>
             <Modal modalStyle = {`nav-bar-modal ${isMenuOpen? 'active':'null'}`}/>
           </div>
        </nav>
    )
}

export default NavBar;
