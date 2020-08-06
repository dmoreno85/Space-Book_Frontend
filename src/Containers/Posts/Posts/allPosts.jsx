import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/actions/posts';
import Post from '../Post/Post.jsx';
import{ LikeDislike} from '../../../Components/LikeDislike/likeDislike';
import './allPosts.scss';

class AllPost extends React.Component {

    componentDidMount = () => {
        getAllPosts()
        
    };

    render() {
        // console.log('esto es posts', this.props.posts);
        const Posts = this.props.posts;
      
        return (
            <div className="posts">
                {Posts?.map(post =>
                     <div key={post._id} className="containerPost"> {post.user.name} : {post.message}  <LikeDislike/>
                     </div>)}
            </div>
        )
    };

}

const mapStateToProps = ({ post, users }) => ({
    posts: post.posts,
    user: users.user.allusers
})



export default connect(mapStateToProps)(AllPost);