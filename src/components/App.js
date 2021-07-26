import React,{useEffect} from 'react';
import Home from './Home';
import Login from './Login';
import AccountError from './AccountError';
import SignUp from './SignUp';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import ExistingAccoutError from './ExistingAccoutError';
import '../sass/main.scss';

const App = ({fetchUser,user}) => {
  

  useEffect(()=>{
    fetchUser();
 },[])  
  
  return (
        <>

        {console.log(user)}
        <Router>
          <Route exact path='/' component = {Home}/>
          <Route exact path ='/login' component = {Login} />
          <Route exact path = '/signup' component = {SignUp}/>
          <Route exact path = '/dashboard' component = {Dashboard}/>
          <Route exact path = '/no-account-found/google-oauth2' component = {AccountError}/>
          <Route exact path = '/account-found/google-oauth2'component = {ExistingAccoutError}/>
          
        </Router>
        </>
    )
}

const mapStateToProps = (state) =>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps,{fetchUser}) (App);
