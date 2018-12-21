import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../action/postActions';

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newPost: {}
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let { newPost } = this.state;
        newPost[e.target.name] = e.target.value
        this.setState({
            newPost
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.random();
        let { newPost } = this.state;
        newPost.id = id;
        this.props.addPost(newPost)
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" id="title" onChange={this.handleChange} />
                    <input type="text" name="body" id="body" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => { dispatch(addPost(newPost)) }
    }
}

export default connect(null, mapDispatchToProps)(NewPost);