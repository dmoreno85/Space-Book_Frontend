import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts, removePost } from '../../redux/actions/posts';
import Post from '../Post/Post.jsx'
import axios from 'axios'
class AllPost extends React.Component {

    componentDidMount = () => {
        getAllPosts()

    };
    clearPost(id) {
        removePost(id);
    }
    render() {
        // console.log('esto es posts', this.props.posts);
        const Posts = this.props.posts;

        return (
            <div className="posts">
                {Posts?.map(post => <div key={post._id}>{post.user.name} : {post.message} <button onClick={() => this.clearPost(post._id)}>CLEAR</button></div>)}

            </div>
        )
    };

}

const mapStateToProps = ({ post, users }) => ({
    posts: post.posts,
    user: users.user.allusers
})



export default connect(mapStateToProps)(AllPost);