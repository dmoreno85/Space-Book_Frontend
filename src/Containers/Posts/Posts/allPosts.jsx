import React from 'react';
import {connect} from 'react-redux';
import {addNewPost,getAllPosts} from '../../redux/actions/posts'
import Post from '../Post/Post.jsx'
class  AllPost extends React.Component {
    

componentDidMount=()=>{
    console.log('hola,caracla');
    getAllPosts()
}

    
    handleSubmit = event => {
        event.preventDefault();
        event.persist();
        let message = event.target.message.value
      console.log(message);
        addNewPost({ message })
         
            // .then(() => event.target?.reset())
     
    }
    render(){
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



export default connect(mapStateToProps)(AllPost);