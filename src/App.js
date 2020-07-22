import React from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'


function App() {
       return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Switch>
       <Route path="/home" exact/>
       <Route path="/addPost" exact/>
       <Route path="/profile"/>
     </Switch>
    </BrowserRouter>
    </div> 
  );
}

export default App;
