import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions';

const SearchForm = ({ searchMovie }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchMovie(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={text}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { searchMovie })(SearchForm);
