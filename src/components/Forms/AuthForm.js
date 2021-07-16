import React from 'react';
import {useFormik} from 'formik';
import LogoIcon from '../../assets/images/logo.svg';
import GoogleIcon from '../../assets/images/googleIcon.svg';

const AuthForm = ({Title,Access,Type,handleLogin}) => {
    
  const initialValues = {
    email:'',
    password:''
  }

  const onSubmit  = values =>{
    handleLogin(formik.values);
  }

  const validate = values =>{
    let errors = {}
    
        if(!values.email) {
            errors.email = "Required";
        }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Invalid Email Format";
        }

        if(!values.password){ 
            errors.password = "Required"
        }
        else if(values.password.length < 8)
        {
            errors.password = "Minimun 8 characters"
    }
   return errors;
  }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    const renderAccessText = ()=>{

        if(Type === 'login' || Type ==='Login')
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
        
            <div className="form-container">
            <div className = "inner-container">
              <div className="logo-container"><img className="logo" src={LogoIcon} alt ="logo icon"/></div>
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
           <form className="auth-form" onSubmit={formik.handleSubmit}>
           <div className="form-control">
               <label className="primary-label" htmlFor="email">email</label>
               <input className="text-field" 
               type="email" 
               name ="email" 
               placeholder = {"sarac@gmail.com"}
               onChange = {formik.handleChange}
               value = {formik.values.email}
               onBlur = {formik.handleBlur}
               />
               {formik.touched.email && formik.errors.email? <div className="emptyField">{formik.errors.email}</div>:null}
           </div>

           <div className="form-control">
               <label className="primary-label" htmlFor="password">password</label>
               <input className="text-field" 
               type="password" 
               name ="password" 
               placeholder = {"Minimun 8 Characters"}
               onChange = {formik.handleChange}
               value = {formik.values.password}
               onBlur = {formik.handleBlur}
               />
               { formik.touched.password &&  formik.errors.password? <div className="emptyField">{formik.errors.password}</div>:null}
           </div>
           
           <button className="btn btn-primary auth-btn" type="submit">{Type}</button>

           {renderAccessText()}
        </form>
        </div>
        </div>
    )
}

export default AuthForm;
