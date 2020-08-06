import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions/users';
import Post from '../Posts/Post/Post.jsx';
import AllPosts from '../Posts/Posts/allPosts.jsx';
import './Home.scss'
const Home = ({ user }) => {
    useEffect(() => {
        getUsers()

    }, [])
    return (

        <div >
            <div className="home">

                <AllPosts className="post" />
            </div>
            {/* {
user?.map(users=><div key={users._id}>Nombre users:  {users.name}</div>)
} */}
            <Post />
        </div>
    )
}
const mapStateToProps = ({ users }) => ({

    user: users.user.allUsers,


});

export default connect(mapStateToProps)(Home);