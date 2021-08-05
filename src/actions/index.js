
import axios from 'axios';
import history from '../history';

export const fetchUser = () =>{ 
 return async(dispatch) =>{
     const response = await axios.get('/api/current_user');
     dispatch({type:'FETCH_USER',payload:response.data})
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
