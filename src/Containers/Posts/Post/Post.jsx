import React from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../redux/actions/posts'
class Post extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        event.persist();
        let message = event.target.message.value
        addNewPost({ message })
            .then(() => event.target?.reset())

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="message"></textarea>
                    <button className="primary">Send Post</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = ({ post }) => ({
    posts: post.posts
})

export default connect(mapStateToProps)(Post);