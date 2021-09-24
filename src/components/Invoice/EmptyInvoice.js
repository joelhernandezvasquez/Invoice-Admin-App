import React from 'react';
import EmailImg from '../../assets/images/email_empty_invoice.svg';

const EmptyInvoice = () => {
    return (
        <div className="empty-invoice-container">
         <img className="empty-invoice-illustration" src={EmailImg} alt="email"/>
          <div className="empty-invoice-content">
              <h2 className="empty-invoice-content-title">There is nothing here</h2>
              <div className="content-description-container">
                <p className="empty-invoice-content-description"> Create an invoice by clicking the <span>New </span>
                    button and get started.
                </p>
              </div>
              
          </div>
        </div>
    )
}

export default EmptyInvoice;
