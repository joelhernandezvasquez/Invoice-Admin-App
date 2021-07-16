import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../sass/main.scss';

const App = () => {
    return (
        <>
        <Router>
          <Route exact path='/' component = {Home}/>
          <Route exact path ='/login' component = {Login} />
          <Route exact path = '/signup' component = {SignUp}/>
        </Router>
        </>
    )
}

export default App;
