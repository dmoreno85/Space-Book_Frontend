import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import Home from './Containers/Home/Home.jsx';
import Profile from './Containers/Profile/Profile.jsx';
import Register from './Containers/Register/Register.jsx';
import { connect } from 'react-redux'
import './App.scss'
import Login from './Containers/Login/Login.jsx';

const App = ({ isLoggedIn }) => {
  // if (isLoggedIn) {
  //   console.log('Logueado', isLoggedIn);
  // } else console.log('no logueado', isLoggedIn);

  return (
    <div >
      <BrowserRouter >
        {isLoggedIn && <Header />}
      <div className="container">
        {isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/login' />}
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          {isLoggedIn ? <Route path="/" component={Home} exact /> : <Route path="/" component={Login} exact />}
          <Route path="/home" component={Home} exact />
          <Route path="/addPost" exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  )

}



const mapStateToProps = state => ({
  user: state.users.user,
  isLoggedIn: state.users.user_logged

});
export default connect(mapStateToProps)(App);
