import React from 'react';
import LogoIcon from '../../assets/images/logo.svg';
import GoogleIcon from '../../assets/images/googleIcon.svg';

const AuthForm = ({Title,Access}) => {
    return (
        <form className="auth-form">
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
        </form>
    )
}

export default AuthForm;
