import React from 'react';
import PostList from './Components/PostList'; 
import UsersList from './Components/UsersList'; 

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostList />

      <h1>Users</h1>
      <UsersList />
    </div>
  );
}

export default App;
