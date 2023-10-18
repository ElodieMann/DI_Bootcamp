// transactionReducer.js

let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions')) || [],
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INSERT':
        const newList = [...state.list, action.payload];
        localStorage.setItem('transactions', JSON.stringify(newList));
        return {
          ...state,
          list: newList,
        };
      case 'UPDATE':
        const updatedList = state.list.map((item, index) =>
          index === state.currentIndex ? action.payload : item
        );
        localStorage.setItem('transactions', JSON.stringify(updatedList));
        return {
          ...state,
          list: updatedList,
        };
      case 'DELETE':
        const filteredList = state.list.filter((item, index) => index !== action.payload);
        localStorage.setItem('transactions', JSON.stringify(filteredList));
        return {
          ...state,
          list: filteredList,
        };
      case 'UPDATE-INDEX':
        return {
          ...state,
          currentIndex: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  