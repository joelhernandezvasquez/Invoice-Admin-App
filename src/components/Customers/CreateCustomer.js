import React from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import ReturnBackLink from '../ReusableComponents/ReturnBackLink';
import CustomerForm from './CustomerForm';

const CreateCustomer = () => {
    return (
        <div className="create-customer-wrapper">
            <DashboardHeader/>
             <div className="create-customer-content container">
                <ReturnBackLink route={'/customer'}/>
                <h2 className="main-heading-title">New Customer</h2>
                <CustomerForm/>
             </div>
        </div>
    )
}

export default CreateCustomer;
