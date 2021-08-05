
const initialState = {
    users:[],
    userError:null
}


export const userReducer = (state =initialState,action) =>{
 
    switch(action.type){
      case 'CREATE_USER':
          return{
              ...state,
              users:[...state.users,action.payload]
          }

          case 'ERROR_USER':
         return{
              ...state,
              userError:action.payload
          }
          
          default:
              return state;
  }
}
export default userReducer;