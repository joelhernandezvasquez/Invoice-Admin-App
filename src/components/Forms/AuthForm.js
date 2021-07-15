import React from 'react';
import {useFormik} from 'formik';
import LogoIcon from '../../assets/images/logo.svg';
import GoogleIcon from '../../assets/images/googleIcon.svg';

const AuthForm = ({Title,Access,Type,handleLogin}) => {
    
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: values =>{
            console.log('form values:',values);
        },
        validate: values =>{
            
        }

       
    })

   
    
    const renderAccessText = ()=>{

        if(Type == 'login' || Type ==='Login')
        {
        return(
          <p className="account-access-text"> Not registered yet? <a href="#">Create an Account?</a></p>
        )
        }

        if(Type =='sign in' || 'Sign in')
        {
         return(
            <p className ="account-access-text">Already have an Account? <a href="#">Sign in?</a></p> 
         )
        }
    }
    return (
        
        <form className="auth-form" onSubmit={formik.handleSubmit}>
           <img className="logo" src={LogoIcon} alt ="logo icon"/>
           <h2 className="section-title text-center">{Title}</h2>
           <button className="google-btn">
               <img className="google-icon" src={GoogleIcon} alt="google icon"/>
               <span className="btn-text">{Access}</span>
           </button>
           <div className="divider-line">
               <div className="line"></div>
               <span>Or</span>
               <div className="line"></div>
           </div>

           <div className="form-control">
               <label className="primary-label" htmlFor="email">email</label>
               <input className="text-field" 
               type="email" 
               name ="email" 
               onChange = {formik.handleChange}
               value = {formik.values.email}/>
           </div>

           <div className="form-control">
               <label className="primary-label" htmlFor="password">password</label>
               <input className="text-field" 
               type="password" 
               name ="password" 
               onChange = {formik.handleChange}
               value = {formik.values.password}/>
           </div>
           
           <button  className="btn btn-primary auth-btn" type="submit" onClick = {()=> handleLogin()}>{Type}</button>

           {renderAccessText()}
        </form>
    )
}

export default AuthForm;
