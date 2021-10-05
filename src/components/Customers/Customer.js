import React, { useEffect, useState, useRef } from 'react'
import DashboardHeader from '../Dashboard/DashboardHeader'
import UseScreenSize from '../Hooks/UseScreenSize'
import SideMenuDesktop from '../SideMenuDesktop'
import HeaderList from '../ReusableComponents/HeaderList'
import CustomerItem from './CustomerItem'
import Pagination from '../ReusableComponents/Pagination';
import EmptyData from '../ReusableComponents/EmptyData'
import CustomerImg from '../../assets/images/empty_customer.svg';
import { connect } from 'react-redux'
import {
  fetchCurrentLocation,
  fetchCustomers,
  filterCustomers,
  clearCustomerFilter
} from '../../actions'

const Customer = ({
  location,
  routing,
  customers,
  customerFilter,
  fetchCurrentLocation,
  fetchCustomers,
  filterCustomers,
  clearCustomerFilter
}) => {
  const screenWidth = UseScreenSize()
  const [searchInput, setSearch] = useState(null)
  const searchInputRef = useRef(null);
  
  
 
  useEffect(() => {
    fetchCurrentLocation(location.pathname.replace('/', ''))
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [])

  useEffect(() => {
    if (searchInput == null) return

    if (searchInput.length > 1) {
      filterCustomers(searchInput)
      return
    }

    if (searchInput.length < 1) {
      clearCustomerFilter()
      return
    }

  }, [searchInput])

   useEffect(() => {
     if(customerFilter.length > 0)
     {
       clearCustomerFilter();
     }
   }, [])

  const applyFocusAnimation = () => {
    searchInputRef.current.style.border = `1px solid #FE6C4D`
  }
  const removeFocus = () => {
    searchInputRef.current.style.border = `1px solid #D6D6D6`
  }

  const loadCustomer = () => {
    if (customerFilter.length < 1) {
      return customers.map(customer => {
        return <CustomerItem customerData={customer} />
      })
    }

    return customerFilter.map(customer => {
      return <CustomerItem customerData={customer} />
    })
  }
 const getCustomerCount = ()=>{
    if(customerFilter.length > 0)
    { 
      return customerFilter.length;
    } 

    return customers.length;
 }
  return (
    <div className='customer-wrapper'>
      <DashboardHeader currentLocation={routing ? routing.location : ''} />
      {screenWidth >= 1280 && (
        <div className='side-menu-desktop'>
          <SideMenuDesktop />
        </div>
      )}
      {}
      <div className='customer-content container'>
        <HeaderList routingName='Customer' link = {'/add/customer'} count={getCustomerCount()} />
        <div
          ref={searchInputRef}
          className='search-container'
          onBlur={() => removeFocus()}
        >
          <i id='search-icon' className='fa fa-search' aria-hidden='true'></i>
          <input
            type='text'
            value={searchInput}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search Customers'
            onFocus={e => applyFocusAnimation(e)}
          />
        </div>

        
        { customers.length > 0? loadCustomer():<EmptyData description = {'a customer'} illustration = {CustomerImg}/>  }

        {customers.length > 0 &&(
        <div className='pagination-container'>
          {screenWidth < 767 ? '' : <p>{`Showing ${5} from ${20} data`}</p>}
          <Pagination totalItem={20} rangePerPage={5} />
        </div> 
        )
       }


      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    routing: state.routing,
    customers: state.customer.customers,
    customerFilter: state.customer.filterCustomers
  }
}

export default connect(mapStateToProps, {
  fetchCurrentLocation,
  fetchCustomers,
  filterCustomers,
  clearCustomerFilter
})(Customer)
