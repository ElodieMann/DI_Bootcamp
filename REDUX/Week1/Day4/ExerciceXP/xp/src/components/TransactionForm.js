import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/transactionActions';

const TransactionForm = (props) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [FSC, setFSC] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'accountNumber':
        setAccountNumber(value);
        break;
      case 'FSC':
        setFSC(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.currentIndex === -1)
      props.insert({ accountNumber, FSC, name, amount });
    else props.update({ accountNumber, FSC, name, amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Account Number"
        name="accountNumber"
        value={accountNumber}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="FSC"
        name="FSC"
        value={FSC}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="Amount"
        name="amount"
        value={amount}
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

export default connect(mapStateToProps, actions)(TransactionForm);
