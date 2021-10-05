
const initialState = {
    customers:[],
    filterCustomers:[],
    errorCustomer:null
}

export const customerReducer = (state = initialState,action) =>{
   switch(action.type)
   {
       case 'FETCH_CUSTOMERS':{
           return{
               ...state,
               customers:action.payload
           }
       }

       case'FETCH_CUSTOMER':{
           return{
               ...state,
               customers:action.payload
           }
       }

       case 'FILTER_CUSTOMER':{
           return{
               ...state,
               filterCustomers:state.customers.filter(customer => customer.name.includes(action.payload))
            
           }
       }

       case 'CLEAR_CUSTOMER_FILTER':{
          return{
              ...state,
              filterCustomers:[]
          }
       }

       case 'ERROR_CUSTOMER':{
           return{
               ...state,
               errorCustomer:action.payload
        }
       }

       default:
           return state;
   }
}
export default customerReducer;