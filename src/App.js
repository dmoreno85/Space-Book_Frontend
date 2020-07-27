import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      isLoggedIn: false,
    };

  };


  render() {
  
  const isRegistered = this.state.isRegistered;
    const isLoggedIn = this.state.isLoggedIn;
    const token = localStorage.getItem('authToken');
      return (
        <div className="container">
          <BrowserRouter >
{token ? <Header/>: ''}
            <Switch>
        <Route path="/login" component={Login} exact /> 
            
              <Route path="/register" component={Register} exact/>
              <Route path="/" component={Home} exact />
               <Route path="/home" component={Home} exact />
              <Route path="/addPost" exact />
              <Route path="/profile" component={Profile} exact />
            </Switch>
          </BrowserRouter>
        </div>
      )
    
  }




  // render() {
  //   const token = localStorage.getItem('authToken');
  //   // const isLoggedIn = this.state.isLoggedIn;
  //   if (!token) {
  //     return (
  //       <div className="container">
  //         <BrowserRouter >
  //           <Switch>
  //             <Route path="/" component={Login} exact />
  //             crear componente error
  //             <Route path="/" component={Login}  />
  //             <Route path="/login" component={Login} exact />
  //             <Route path="/register" component={Register} exact  />
  //           { token? <Route path="/home" component={Home} exact / > : null}
  //           </Switch>
  //         </BrowserRouter>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="container">
  //         <BrowserRouter >
  //           <Header />
  //           <Switch>

  //             <Route path="/" component={Home} exact />
  //             <Route path="/home" component={Home} exact />
  //             <Route path="/addPost" exact />
  //             <Route path="/profile" component={Profile} exact />
  //           </Switch>

  //         </BrowserRouter>
  //       </div>
  //     )
  //   }

  // }

}

export default App;
