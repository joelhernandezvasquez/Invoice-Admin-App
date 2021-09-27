import React from 'react';
import useFormatDate from '../Hooks/useFormatDate';

const CustomerItem = ({customerData}) => {
   
    const{name,email,amountDue,register,status} = customerData;
    const registerOn = useFormatDate(register);

    const getStyle = () =>{
        if(status ==="Active"){
            return{
             backgroundColor:'rgba(51,214,159,0.1)'
            }       
        }

        if(status==="Inactive"){
          return{
            backgroundColor:'rgba(red,0.1)'
          }
        }

    }

    const getStatusColor = () =>{
      if(status==="Active")
        return{
          backgroundColor:'#33D69F'
        }

        if(status==="Inactive")
        return{
          backgroundColor:'red'
        }
    }

    const getCustomerColor = () =>{
      if(status==="Active")
        return{
          color:'#33D69F'
        }
        if(status==="Inactive")
        return{
          color:'red'
        }

    }
    return (
        <div className="customer-item">
             <div className="customer-name"> 
              <span>{name}</span> 
          </div>

          <div className="customer-email">
            <span> {email}</span>
            
          </div> 
          
          <div className="customer-amount">
            <span>${parseFloat(amountDue.toString()).toFixed(2)}</span>
          </div> 
          
          <div className="customer-register-date">
             <span>{registerOn.toString()}</span>  
          
          </div> 
           
          <div className="customer-status">
            <div className="inner-status" style = {getStyle()}>
                <div className="circle" style = {getStatusColor()}></div>
                 <span style = {getCustomerColor()}>{status}</span>
                </div>
          </div> 
        </div>
    )
}

export default CustomerItem;
