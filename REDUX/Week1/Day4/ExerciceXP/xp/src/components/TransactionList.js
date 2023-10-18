import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/transactionActions';

const TransactionList = (props) => {
  const handleEdit = (index) => {
    props.updateIndex(index);
  };

  const handleDelete = (index) => {
    props.remove(index);
  };

  return (
    <div>
      <table border="1">
        <tbody>
          {props.list.map((item, index) => (
            <tr key={index}>
              <td>{item.accountNumber}</td>
              <td>{item.FSC}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, actions)(TransactionList);
