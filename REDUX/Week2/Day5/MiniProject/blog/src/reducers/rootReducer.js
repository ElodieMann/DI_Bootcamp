const initState = {
    posts: [
      {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: '...'},
      {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: '...'},
      {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: '...'}
    ]
  };
  
  const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id;
      });
      return {
        ...state,
        posts: newPosts
      }
    }
    return state;
  }
  
  export default rootReducer;
  