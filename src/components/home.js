import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        const { posts } = this.props;
        console.log(this.props)
        const allPosts = posts.map((data, ind) => {
            return (
                <div key={ind}>
                    <Link to={'/' + data.id}>
                        {data.title}

                    </Link>
                    <p>{data.body}</p>
                </div>
            )
        });
        return (
            <div>
                {allPosts}
                <Link className="addpost" to='/newpost'>Add new Post</Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);  //connect is a function and it will return a higher order function in this case we wrap Home with that higher order function