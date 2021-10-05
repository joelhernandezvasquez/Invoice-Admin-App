import React from 'react';

const CustomerForm = () => {
    return (
        <div className="customer-form">
          <h4 className="sub-heading"> Basic Info</h4> 
           <form className="main-form">
               <div className="form-input-container">
                  <label for="">customer's name</label>
                  <input type ="text"/> 
               </div>

               <div className="form-input-container">
                  <label for="">customer's email</label>
                  <input type ="text"/> 
               </div>

               <div className="form-input-container">
                  <label for="">phone number</label>
                  <input type ="text"/> 
               </div>

               <h4 className="sub-heading"> Billing Address</h4> 
                <div className="billing-address-container">
                
                <div className="form-input-container street-address">
                  <label for="">street address</label>
                  <input type ="text"/> 
                </div>

                <div className="form-input-container city">
                  <label for="">city</label>
                  <input type ="text"/> 
                </div>

                <div className="form-input-container post-code">
                  <label for="">post code</label>
                  <input type ="text"/> 
                </div>

                
                <div className="form-input-container country">
                  <label for="">country</label>
                  <input type ="text"/> 
                </div>


                </div>

                <button>Add Customer</button>
           </form>
        </div>
    )
}

export default CustomerForm;
