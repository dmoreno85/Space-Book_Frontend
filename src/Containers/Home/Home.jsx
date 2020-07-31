import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import{getUsers} from '../redux/actions/users';
const Home = ({user}) => {
    useEffect(()=>{
        getUsers()
console.log(user);
     
    },[])
    return (
      
        <div className="Home">
{
user.map(users=><div> {users.name}</div>)
}
        </div>
    )
}
const mapStateToProps = ({users}) => ({

    user:users.user.allUsers,
  
  
  });

export default connect(mapStateToProps)(Home);