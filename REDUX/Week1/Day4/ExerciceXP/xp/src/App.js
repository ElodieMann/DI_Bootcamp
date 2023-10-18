// App.js

import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const App = () => {
  return (
    <div>
      <h2>Transaction Form</h2>
      <TransactionForm />
      <hr />
      <h2>Transaction List</h2>
      <TransactionList />
    </div>
  );
};

export default App;
