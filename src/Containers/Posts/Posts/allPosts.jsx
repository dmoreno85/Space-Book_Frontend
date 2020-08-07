import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts, removePost, updatePost } from '../../redux/actions/posts';
import Post from '../Post/Post.jsx';
import{ LikeDislike} from '../../../Components/LikeDislike/likeDislike';
import './allPosts.scss';

class AllPost extends React.Component {
    state = {
        textUpdate: false,
    }
    componentDidMount = () => {
        getAllPosts()

    };

    clearPost(id) {
        removePost(id);
    };

    handleTextUpdate = () => {
        this.setState({ textUpdate: true })

    };

    async handleSubmit(event, id) {
        event.preventDefault();
        event.persist();
        let message = event.target.message.value
        if (message.length !== 0) {

            await updatePost(id, { message })
                .then(() => event.target?.reset())
                .then(this.setState({ textUpdate: false }))
        } else {
            this.setState({ textUpdate: false })
        }
    }
    render() {

        const Posts = this.props.posts;

        return (
            <div className="posts">
                {Posts?.map(post => <div key={post._id}>{post.user.name} : {post.message}  <LikeDislike/>
                    <button onClick={() => this.clearPost(post._id)}>CLEAR</button>
                    {this.state.textUpdate && <div className="update" >
                        <form onSubmit={(event) => this.handleSubmit(event, post._id)}>
                            <textarea name="message"></textarea>
                            <button className="primary" >Update Post</button>
                        </form>
                    </div>}
                    <button onClick={this.handleTextUpdate}>Update</button>

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