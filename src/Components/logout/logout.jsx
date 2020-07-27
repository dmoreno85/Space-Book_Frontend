import React from 'react';
import './logout.scss';
import { connect } from 'react-redux';
import { logout } from '../../Containers/redux/actions/users'
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
<button onClick={HandleLogout}>Logout</button>
    </div>
)
};

const mapStateToProps = state => ({
    user: state.users.user
});
export default connect(mapStateToProps)(Logout);