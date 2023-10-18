// transactionActions.js

export const insert = (data) => ({
    type: 'INSERT',
    payload: data,
  });
  
  export const update = (data) => ({
    type: 'UPDATE',
    payload: data,
  });
  
  export const remove = (id) => ({
    type: 'DELETE',
    payload: id,
  });
  
  export const updateIndex = (index) => ({
    type: 'UPDATE-INDEX',
    payload: index,
  });
  