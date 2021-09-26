import React,{useEffect,useState} from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import UseScreenSize from '../Hooks/UseScreenSize';
import SideMenuDesktop from '../SideMenuDesktop';
import HeaderList from '../ReusableComponents/HeaderList';
import { connect } from 'react-redux';
import { fetchCurrentLocation } from '../../actions';

const Customer = ({location,routing,fetchCurrentLocation}) => {
   const screenWidth = UseScreenSize();
   const [searchInput,setSearch] = useState("");

   useEffect(() => {
     fetchCurrentLocation(location.pathname.replace('/','')) 
   }, [])
    return (
        <div className="customer-wrapper">
           <DashboardHeader currentLocation = {routing?routing.location:''}/> 
           {screenWidth>=1280 &&(
               <div className="side-menu-desktop">
                <SideMenuDesktop/> 
               </div>
             )}
           {}
           <div className="customer-content container">
           <HeaderList routingName="Customers" count={6}/>
           <div className="search-container">
           <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
               <input type="text" value = {searchInput} onChange = {(e)=> setSearch(e.target.value)} placeholder="Search customers" />
           </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        routing: state.routing
    }
}

export default connect(mapStateToProps,{fetchCurrentLocation}) (Customer);
