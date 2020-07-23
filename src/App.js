import React from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import Home from './Containers/Home/Home.jsx';
import Profile from './Containers/Profile/Profile.jsx';
import Register from './Containers/Register/Register.jsx';
import './App.scss'
import Login from './Containers/Login/Login.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:true,
      isRegistered:false
    };
    
};
render(){
  const isLoggedIn = this.state.isLoggedIn;
  const isRegistered = this.state.isRegistered;
  return (
    <div className="container">
    <BrowserRouter >
    {!isLoggedIn ?
    <div>
      {isRegistered? <Login/>: <Register/>
      }
      </div> 
      :
      <Header/>
     
      }
     <Switch>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/addPost" exact/>
        <Route path="/profile" component={Profile} exact/>
      </Switch>
     
    </BrowserRouter>
    </div> 
  )
}
     
}

export default App;
