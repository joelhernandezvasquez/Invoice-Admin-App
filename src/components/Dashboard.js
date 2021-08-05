import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { userAccess } from '../actions';
import history from '../history';
import Modal from './Modal';
import LogoIcon from '../assets/images/logo.svg';

const Dashboard = ({location,userAccess,userError}) =>{
    
  const[showWelcomeModal,setShowWelcomeModal] = useState(location.state);

 useEffect(()=>{
   userAccess();
   // eslint-disable-next-line
 },[])

 
  useEffect(()=>{
   history.replace("/dashboard",null); 
 },[])

  
 const renderUserFailedMessage = () =>{
    return(
         <Modal  
            modalStyle ={'user-failed-message'} 
            content = {renderUserErrorModal()}
            onDissmiss = {closeUserErrorMessage}
         />
    ) 
 }
 
 const renderUserErrorModal = () =>{
    return (
      <div className="user-failed-card container">
      <h1>User Failed</h1>
      <p className="text-center">You Must Log in!
     </p>
      <button className="btn btn-primary" onClick ={()=> closeWelcomeModal()}> Close</button>
    </div>
    )
 }

 const closeUserErrorMessage = () =>{
   history.push('/login');
 }

 const closeWelcomeModal = async () =>{
     history.replace('/dashboard',null)
    setShowWelcomeModal(" "); 
  
  }

    const renderWelcomeModal = () =>{
         return(
         
            <div className="welcome-card container">
              <img  src={LogoIcon} alt="iconi"/>
              <h1>Welcome to Invoicely</h1>
              <p className="text-center">Start creating professional invoices quickly, Make your small business look professional, save time and
                 Access all customer information in one place.
             </p>
              <button className="btn btn-primary" onClick ={()=> closeWelcomeModal()}> Continue</button>
            </div>
        )
    }
    return (
        <div className="dashboard-wrapper">
         
            {userError? renderUserFailedMessage():null} 
            
              {showWelcomeModal === 'signUp' ?  <Modal
              modalStyle ={'welcome-message'}
              content = {renderWelcomeModal()}
              onDissmiss = {closeWelcomeModal}
            />:null}  
           
        </div>
    )
}

const mapStateToProps = (state) =>{
  
  return{
    userError:state.users.userError
  }
}

export default connect(mapStateToProps,{userAccess}) (Dashboard);
