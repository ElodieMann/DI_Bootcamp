import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends React.Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div className="center">Loading post...</div>;
    }

    return (
      <div className="container">
        <div className="post">
          <h4 className="center">{post.title}</h4>
          <p>{post.body}</p>
          <div className="center">
            <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match && ownProps.match.params ? ownProps.match.params.post_id : null;
    return {
      post: id ? state.posts.find(post => post.id === id) : null
    }
  }
  

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
