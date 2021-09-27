import React,{useEffect,useState,useRef} from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import UseScreenSize from '../Hooks/UseScreenSize';
import SideMenuDesktop from '../SideMenuDesktop';
import HeaderList from '../ReusableComponents/HeaderList';
import CustomerItem from './CustomerItem';
import { connect } from 'react-redux';
import { fetchCurrentLocation } from '../../actions';

const Customer = ({location,routing,fetchCurrentLocation}) => {
   const screenWidth = UseScreenSize();
   const [searchInput,setSearch] = useState("");
   const searchInputRef = useRef(null);

   const customer = [{
     name:'Alex Campbell',
     email:'alexcampbell@example.com',
     amountDue:8295,
     register:new Date(2020,3,30).getTime(),
     status:'Active'
   },
   {
    name:'Barbarra Moore',
    email:'barbaramoore@example.com',
    amountDue:'',
    register:'24 Oct 2020',
    status:'Active'
  },
  {
    name:'Brian Johnson',
    email:'brianjohnson@example.com',
    amountDue:'$295',
    register:'16 Nov 2020',
    status:'Inactive'
  }
  
  ]

   useEffect(() => {
     fetchCurrentLocation(location.pathname.replace('/','')) 
   }, [])

    const applyFocusAnimation = () =>{
       searchInputRef.current.style.border = `1px solid #FE6C4D`
    }
    const removeFocus = () =>{
      searchInputRef.current.style.border = `1px solid #D6D6D6`
    }

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
           <div  ref={searchInputRef} className="search-container" onBlur = {() => removeFocus()}>
           <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
               <input type="text" value = {searchInput} 
                 onChange = {(e)=> setSearch(e.target.value)} 
                 placeholder="Search Customers" 
                 onFocus = {(e)=> applyFocusAnimation(e)}

                 />
           </div>
           <CustomerItem customerData = {customer[0]}/>
             
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
