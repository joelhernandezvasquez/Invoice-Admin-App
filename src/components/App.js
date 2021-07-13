import React from 'react';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../sass/main.scss';

const App = () => {
    return (
        <>
        <Router>
          <Route exact path='/' component = {Home}/>
          <Route exact path ='/login' component = {Login} />
        </Router>
        </>
    )
}

export default App;
