import React,{useState,useEffect} from 'react';
import DashboardHeader from './Dashboard/DashboardHeader';
import InvoiceStats from './ReusableComponents/InvoiceStats';
import DataItemProfile from './ReusableComponents/DataItemProfile';
import {connect} from 'react-redux';
import { userAccess } from '../actions';
import history from '../history';
import Modal from './Modal';
import LogoIcon from '../assets/images/logo.svg';
import TotalInvoicesIcon from '../assets/images/totalInvoiceIcon.svg';
import PaidInvoicesIcon from '../assets/images/PaidInvoicesIcon.svg';
import UnpaidInvoicesIcon from '../assets/images/unpaidInvoicesIcon.svg';
import SentInvoicesIcon from '../assets/images/InvoicesSentIcon.svg';
import GraphicBarIcon from '../assets/images/graphicBar.svg';
import GraphicBarPaidIcon from '../assets/images/graphicBarPaid.svg';
import GraphicBarUnpaidIcon from '../assets/images/graphicBarUnPaid.svg';
import GraphicBarSentIcon from '../assets/images/graphicBarSent.svg';

const Dashboard = ({location,userAccess,userError}) =>{
    
  const[showWelcomeModal,setShowWelcomeModal] = useState(location.state);

  const invoices = [
    {
     
      customer:'Chef Renata',
      date:'4 June 2020',
      status:'paid',
      amount:5111
    },
    {
    
      customer:'Renata',
      date:'7 June 2020',
      paymentStatus:'pending',
      amount:4032
    },
    {
      
      customer:'Nobu 57',
      date:'8 June 2021',
      paymentStatus:'Sent',
      amount:253
    },

    {
     
      customer:'Security',
      date:'1 June 2020',
      paymentStatus:'pending',
      amount:5853
    },

    {
     
      customer:'Angel Bury',
      date:'10 June 2020',
      paymentStatus:'paid',
      amount:10553
    },
  ]

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

            <DashboardHeader/> 
            <div className="invoice-stats-container">
              <div className="container">
               <InvoiceStats
                 numberOfStats = {2478}
                 type={"Total Invoices"}
                 iconStats = {TotalInvoicesIcon}
                 graphicBar = {GraphicBarIcon}
               />

                <InvoiceStats
                 numberOfStats = {2478}
                 type={"Paid Invoices"}
                 iconStats = {PaidInvoicesIcon}
                 graphicBar = {GraphicBarPaidIcon}
               />

                <InvoiceStats
                 numberOfStats = {2478}
                 type={"Unpaid Invoices"}
                 iconStats = {UnpaidInvoicesIcon}
                 graphicBar = {GraphicBarUnpaidIcon}
               />

                <InvoiceStats
                 numberOfStats = {2478}
                 type={"Total Invoices Sent"}
                 iconStats = {SentInvoicesIcon}
                 graphicBar = {GraphicBarSentIcon}
               />
              </div>
            </div>

            <div className="container">
              <div className="recent-invoices-container">
                <div className="header">
                  <h2>Recent Invoices</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="recent-invoice-list">
                 <DataItemProfile dataItem = {invoices[0]}/>
                </div>
               
              </div>
            </div>
            </div>
           
        
    )
}

const mapStateToProps = (state) =>{
  
  return{
    userError:state.users.userError
  }
}

export default connect(mapStateToProps,{userAccess}) (Dashboard);
