import React from 'react';
import './logout.scss';
import { connect } from 'react-redux';
import { logout } from '../../Containers/redux/actions/users';
import { NavLink } from 'react-router-dom';
const Logout = ({user}) => {

   const  HandleLogout=(event)=>{
        event.preventDefault();
       logout(user)
       .then(res => {
       
        if (res) {
            return this.props.history.push('/login')
        }else{}
    })
    .catch(error => {
       
        console.log(error);
    });
    }
return(
    <div>
<a onClick={HandleLogout}>Salir</a>
    </div>
)
};

const mapStateToProps = state => ({
    user: state.users.user
});
export default connect(mapStateToProps)(Logout);