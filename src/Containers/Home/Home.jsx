import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import{getUsers} from '../redux/actions/users';
import Post from '../Posts/Post/Post.jsx';
import AllPosts from '../Posts/Posts/allPosts.jsx'
const Home = ({user}) => {
    useEffect(()=>{
        getUsers()

    },[])
    return (
      
        <div className="Home">
            <AllPosts/>
{/* {
user?.map(users=><div key={users._id}>Nombre users:  {users.name}</div>)
} */}
<Post className="post"/>
        </div>
    )
}
const mapStateToProps = ({users}) => ({

    user:users.user.allUsers,
  
  
  });

export default connect(mapStateToProps)(Home);