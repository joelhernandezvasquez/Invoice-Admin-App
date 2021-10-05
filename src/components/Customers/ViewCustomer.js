
import{useEffect} from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import SideMenuDesktop from '../SideMenuDesktop';
import ReturnBackLink from "../ReusableComponents/ReturnBackLink";
import ShowStatus from "../ReusableComponents/ShowStatus";
import UseScreenSize from '../Hooks/UseScreenSize';
import useFormatDate from '../Hooks/useFormatDate';
import{Link} from 'react-router-dom';
import { fetchCustomer } from '../../actions';
import { connect } from 'react-redux';
import React from 'react';

const ViewCustomer = ({location,match,routing,fetchCurrentLocation,fetchCustomer,customer}) => {
  
  const screenWidth = UseScreenSize();
   const [setDateFormat] = useFormatDate();
  
   useEffect(() => {
    
    fetchCustomer(match.params.id);
   
   }, [])

   const getName = () =>{
     if(customer.name){
    let firstInitial = customer.name.slice(0,1);
    let secondInitalPosition = customer.name.indexOf(" ");
    
    return(`${firstInitial}${customer.name[secondInitalPosition+1]}`)
   
    }
  }

    return (


        <div className="customer-view-wrapper">

          <DashboardHeader currentLocation={"View Customer"} />
          {screenWidth >= 1280 && (
        <div className='side-menu-desktop'>
          <SideMenuDesktop />
        </div>
      )}
          <div className="customer-view-content container">
           
          <ReturnBackLink route={'/customer'}/>
            <div className="menu-actions">
             {customer.status && <ShowStatus status = {customer.status} /> }
             
            
             <div id="menu-action-links">
                <Link className="action-btn btn-edit">Edit</Link>
                  <Link className="action-btn btn-delete">Delete</Link>
             </div>
            </div>

            <div className="customer-info">
               <div className="customer-avatar">
                 <h2>{getName()}</h2>
               </div>
               <div className="customer-name-container">
                  <h2 className="customer-name"> {customer.name} </h2>
               </div>
               <div className="customer-id-container customer-input">
                 <span className="label-title">Customer ID</span> 
                 <span className="label-input">#{customer._id}</span>
               </div>
 
                 <div className="customer-email-container customer-input">
                 <span className="label-title">Email</span> 
                 <span className="label-input">{customer.email}</span>
               </div> 
               <div className="customer-contact-container customer-input">
                 <span className="label-title">Phone</span> 
                 <i class="fa fa-mobile" aria-hidden="true"></i>
                 <span className="label-input">{customer.phoneNumber}</span>
               </div>

                <div className="customer-registerDate-container customer-input">
              
                 <span className="label-title">Register On</span> 
                 <span className="label-input">{setDateFormat(customer.registerDate)} </span>
               </div>
 
               <div className="customer-amountDue-container customer-input">
                 <span className="label-title">Amount Due</span> 
                 <span className="label-input">${customer.amountDue? `${parseFloat(customer.amountDue.toString()).toFixed(2)}`:'0.00'} </span>
               </div>  

               <div className="customer-address-container customer-input">
                 <span className="label-title">Address</span> 
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                 <div className="address-info">
                   <span className="label-input">{ customer.address ? customer.address.streetAdress:''} </span>
                   <span className="label-input"> { customer.address ? `${customer.address.city}, ${customer.address.country}`:''} </span>
                   <span className="label-input">{ customer.address? customer.address.postCode: ''}</span>  
                 </div>
               </div> 

               <div className="divider">

               </div>
               
             </div>

             <footer>
              <Link className="action-btn btn-edit">Edit</Link>
              <Link className="action-btn btn-delete">Delete</Link>
             </footer>
          </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      customer:state.customer.customers
    }
  }

export default connect(mapStateToProps,{fetchCustomer}) (ViewCustomer);
