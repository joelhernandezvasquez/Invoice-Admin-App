import React,{useState} from 'react';
import Modal from './Modal';
import logoIcon from '../assets/images/logo.svg';
import menuIcon from '../assets/images/hamburgerMenuIcon.svg';

const NavBar = () => {
    
  const [isMenuOpen,setIsMenuOpen] = useState(false);

   const renderMenuIcon = () =>{
     
    if(!isMenuOpen) 
     {
       return(
        <img className="menu-icon" src={menuIcon} alt="menu icon"/>
       )
     }

     else{
       return(
        <i className="fa fa-times icon-close " aria-hidden="true"></i>
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
             {isMenuOpen && (<Modal modalStyle ="nav-bar-modal"/>)}
           </div>

           
        </nav>
    )
}

export default NavBar;
