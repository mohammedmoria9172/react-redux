import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../action/postActions';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        console.log(this.props, 'in post')
        const sgPost = this.props.post ?
            (
                <div>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                    <button onClick={this.handleClick}>Delete</button>
                </div>

            ) : (<div>no data</div>)
        return (
            <div>
                {sgPost}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => { //store.dispatch(roboAction); we have dispatch like this in our codepen example, dispatch returns object.
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);