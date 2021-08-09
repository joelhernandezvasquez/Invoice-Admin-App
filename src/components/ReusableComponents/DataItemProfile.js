import React from 'react';
import customerSample1 from '../../assets/images/customer2.png';

const  DataItemProfile = ({dataItem}) => {
    const {customer,date,amount,status} = dataItem;
    
    const statusColor = {
        paid:'#09BD3C',
        pending:'#FB896B',
        sent:'#50E0B4',
        draft:'#7A3DFD'
    }
    
    const renderAmount = (amount) =>{
       
         if(amount.length < 4 || amount.length > 6)
         {
             return `$${amount}`;
         }

         if(amount.length === 4)
         {
             const firstDigits = amount.slice(0,1);
             const remaingString = amount.slice(1);
             return `$${firstDigits},${remaingString}` 
         }
         if(amount.length === 5)
         {
            const firstDigits = amount.slice(0,2);
            const remaingString = amount.slice(2);
            return `$${firstDigits},${remaingString}`  
         }
         if(amount.length === 6)
         {
            const firstDigits = amount.slice(0,3);
            const remaingString = amount.slice(3);
            return `$${firstDigits},${remaingString}`  
         }   
    }
     const renderStatus = () =>{
       switch(status)
       {
           case 'paid' :
               return (
                 <span style ={{color:`${statusColor[status]}`}}>{status}</span>
               )

               case 'pending' :
                return (
                  <span style ={{color:`${statusColor[status]}`}}>{status}</span>
                )

                case 'sent':
                return (
                  <span style ={{color:`${statusColor[status]}`}}>{status}</span>
                )

                case 'draft':
                return (
                  <span style ={{color:`${statusColor[status]}`}}>{status}</span>
                )
           }
       }
     
    return (
        <div className="data_item_profile">
                <div className="heading-profile">
                    <div className="profile-image-container">
                        <i className="fa fa-user profile-image user-icon" aria-hidden="true"></i> 
                        <img className="profile-image" src={customerSample1} alt ="profile-image"/> 
                    </div>
                    <div className="heading-profile-content">
                        <h3>{customer}</h3>
                         <span>{date}</span>
                    </div>
                </div>
                <div className="content">
                    <h3>
                     {status === 'paid'? '+':'-'}
                     {renderAmount(amount.toString())}
                     
                    </h3>
                    {renderStatus()}
                </div>
            </div>
    
    )
}

export default DataItemProfile;
