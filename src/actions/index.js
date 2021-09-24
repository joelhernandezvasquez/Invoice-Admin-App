
import axios from 'axios';
import history from '../history';
import ErrorMessage from '../components/ReusableComponents/Message';

export const fetchCurrentLocation = (location) =>{
  return{
    type:'FETCH_CURRENT_LOCATION',
    payload:location
  }
}

export const fetchCurrentUser = () =>{ 
 return async(dispatch) =>{
     const response = await axios.get('/api/current_user');
     dispatch({type:'FETCH_CURRENT_USER',payload:response.data})
 }
}

export const fetchUsers = () =>{
  return async(dispatch) =>{
      const response = await axios.get('/api/get/users');
      dispatch({type:'FETCH_USERS',payload:response.data});
  }
} 
export const createUser = (user) =>{
    return async(dispatch) =>{
        const response = await axios.post("/api/users",{...user});
        dispatch({type:'CREATE_USER',payload:response.data})
       
         history.push(
            {
                pathname:'/dashboard',
                state:'signUp'
        }); 
    }
}

 export const updateUser = (formData) =>{
   
    return async(dispatch) =>{
      try{
        const response = await axios.put(`/api/update_user`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
        dispatch({type:'UPDATE_USER',payload:response.data});
    
      }
      catch(err){
        dispatch({type:'ERROR_USER',payload:err})
      }
    } 
} 

export const updateUserPassword = (id,password) =>{
  let status = null;
  return async (dispatch) =>{
    try{
      console.log("hello from the action")
      const response = await axios.put(`/api/update_password`,{_id:id,newPassword:password});
      console.log(response.data);
      dispatch({type:'UPDATE_PASSWORD',payload:response.data})
      return status =  response.status;
    }
    catch(err){
      dispatch({type:'ERROR_USER',payload:err})
      return status;
    }
  }
}
 
export const deleteUser = (id) =>{
  let status = null;

  return async(dispatch) => {
    try{
      const response = await axios.delete(`/api/delete_user/${id}`);
      dispatch({type:'DELETE_USER', payload:response.data}) 
      status = response.status;
      console.log(status);
      return status;
    }
    catch(err)
    {
      dispatch({type:'ERROR_USER',payload:err})
       return status;
    }
     
  }
}
export const loginUser = (user) =>{
    return async (dispatch) =>{
        try{
            const response = await axios.post('/api/login/user',{...user})
           if(response.data.userExist)
            {
               history.push("/dashboard"); 
            } 
        }

        catch(err)
        {
            history.push(
                {
                    pathname:'/login',
                    state:'login failed'
            });
        }
    }
}

export const userAccess = () =>{
     return async (dispatch) =>{
         try{
              await axios.get('/api/dashboard');
         }
         catch(err){
           dispatch({type:'ERROR_USER',payload:err})
         }
     }  
}

export const selectAccountItems = (item) =>{
    return{
     type:'SELECT_ACCOUNT_ITEMS',
     payload:item
    }
}

export const fetchInvoices  = () =>{
  return async(dispatch) =>{
    try{
        const response = await axios.get('/api/get/invoices');
        dispatch({type:'FETCH_INVOICES',payload:response.data})
    }
    catch(err){
     console.log(err);
    }
  }
}

export const filterInvoices = (status) =>{
  
  return async(dispatch ) =>{
    try{
      dispatch({type:'FILTER_INVOICES',payload:status})
    }
    catch(err){
      console.log(err);
    }
  }
}