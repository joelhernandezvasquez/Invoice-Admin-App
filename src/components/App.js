import React from 'react';
import Home from './Home';
import Auth from './Auth';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../sass/main.scss';

const App = () => {
    return (
        <>
        <Router>
          <Route exact path='/' component = {Home}/>
          <Route exact path ='/auth' component = {Auth} />
        </Router>
        </>
    )
}

export default App;
