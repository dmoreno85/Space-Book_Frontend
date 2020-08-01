import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import{getUsers} from '../redux/actions/users';
import AllPosts from '../Posts/Posts/allPosts'
const Home = ({user}) => {
    useEffect(()=>{
        getUsers()

    },[])
    return (
      
        <div className="Home">
{/* {
user?.map(users=><div key={users._id}>Nombre users:  {users.name}</div>)
} */}
<AllPosts/>
        </div>
    )
}
const mapStateToProps = ({users}) => ({

    user:users.user.allUsers,
  
  
  });

export default connect(mapStateToProps)(Home);