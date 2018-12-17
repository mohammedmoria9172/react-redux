import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    render() {
        console.log(this.props, '~~~~~~~~~')
        const sgPost = this.props.post ?
            (
                <div>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
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
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post);