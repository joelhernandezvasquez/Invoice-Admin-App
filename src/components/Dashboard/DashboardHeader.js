import React from 'react';
import MenuDashboard from './MenuDashboard';
import LogoInvoicely from './LogoInvoicely';
import ProfileUser from './ProfileUser';
import PlusIcon from "../../assets/images/plusIcon.svg";

const DashboardHeader = () => {
    return (
        <div className="dashboard-header">
          <div className="container">
           <MenuDashboard/>
            <LogoInvoicely/>
           {/*  <div className="invoice-btn-container">
               <div className="inner-circle">
                 <img src={PlusIcon} className="plus-icon" alt="plus icon"/> 
               </div>
               <span>New</span>
            </div>  */}
            <ProfileUser/>
            </div> 
        </div>
    )
}

export default DashboardHeader;
