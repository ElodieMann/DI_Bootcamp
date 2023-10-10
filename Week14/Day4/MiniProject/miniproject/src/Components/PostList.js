import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error fetching data" });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                ID: {post.id} <br />
                Title: {post.title} <br />
                Body: {post.body}
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}

export default PostList;
