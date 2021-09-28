import React from 'react';
import useFormatDate from '../Hooks/useFormatDate';
import UseScreenSize from '../Hooks/UseScreenSize';

const CustomerItem = ({customerData}) => {
   
    const{name,email,amountDue,register,status} = customerData;
    const registerOn = useFormatDate(register);
    const screenWidth = UseScreenSize();
    

    const getCustomerColor = () =>{
      
      
      if(status==="Active"){
       
        if(screenWidth < 767){
          return{
            backgroundColor:'rgba(51,214,159,0.1)',
            color:'#33D69F'
          }
        }
        else{
          return{
            color:'#33D69F'
          }
        }
      }
     
        if(status==="Inactive"){
         
          if(screenWidth < 767){
          return{
            backgroundColor:'rgba(217,4,41,0.1)',
            color:'red'
          }
         }
         else{
          return{
            color:'red'
          }
         }
      }
      
      
    }

    

    const getName = () =>{
    let firstInitial = name.slice(0,1);
    let secondInitalPosition = name.indexOf(" ");
    
    return(`${firstInitial}${name[secondInitalPosition+1]}`)
   
    }
    return (
        <div className="customer-item">
          
             <div className="customer-heading">
                <div className="avatar-name">
                <span>{getName()}</span>
              </div>
              
             <div className="customer-name"> 
                 <span>{name}</span>
                 <span className="email"> {email}</span> 
              </div>
          </div>

          <div className="customer-register-date">
             <h2 className="customer-title"> Register On</h2>
             <span>{registerOn.toString()}</span>  
          
          </div> 
             
         
          
           <div className="customer-amount">
           <h2  className="customer-title"> Balance Due</h2>
            <span>${amountDue?`${parseFloat(amountDue.toString()).toFixed(2)}`:'0.00'}</span>
          </div>  
          
        
          
          <div className="customer-status">
          <h2  className="customer-title"> Status</h2>
          <span  style = {getCustomerColor()}>   {status}</span>
            {/* <div className="inner-status" style = {getStyle()}>
                <div className="circle" style = {getStatusColor()}></div>
                 <span style = {getCustomerColor()}>{status}</span>
                </div>
          </div>   */}
        </div>
        </div>
    )
}

export default CustomerItem;
