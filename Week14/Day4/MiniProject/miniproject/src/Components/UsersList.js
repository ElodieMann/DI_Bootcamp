import React, { Component } from 'react';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { users, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                User: {user.id} <br />
                Name: {user.name} <br />
                Username: {user.username} <br /> 
                Email: {user.email} <br /> City: {user.address.city}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UsersList;
