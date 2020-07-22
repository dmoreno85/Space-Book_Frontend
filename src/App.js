import React from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import Home from './Containers/Home/Home.jsx';
import Profile from './Containers/Profile/Profile.jsx';


function App() {
       return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Switch>
       <Route path="/home" component={Home} exact/>
       <Route path="/addPost" exact/>
       <Route path="/profile" component={Profile} exact/>
     </Switch>
    </BrowserRouter>
    </div> 
  );
}

export default App;
