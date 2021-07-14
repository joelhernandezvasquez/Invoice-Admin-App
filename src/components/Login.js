import React from 'react';
import AuthForm from './Forms/AuthForm';
import GraphicBg from '../assets/images/authGraphic.png';
import Frame from '../assets/images/Frame.png';

const Login = () => {
    return (
        <div className="auth-container">
            
            <div className="graphic">
                <img src = {GraphicBg} alt = "graphic shape"/>
            </div>
              
            <div className="container">
                <div className="auth-header">
                     <img src = {Frame} alt = "computer frame"/>
                </div>

                <AuthForm
                 Title = "Log Into Your Invoicely Account"
                 Access = "Sign in with Google"
                />
               
                
            </div>
        </div>
    )
}

export default Login;
