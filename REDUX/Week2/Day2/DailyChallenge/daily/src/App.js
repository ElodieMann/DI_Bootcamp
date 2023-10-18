import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './actions';
import './style.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
    robots: state.robots,
    isPending: state.isPending,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : error ? (
      <h1>Error: {error}</h1>
    ) : (
      <div>
        <nav>
          <h1>ROBOFRIENDS</h1>
          <input type="text" id="input" onChange={onSearchChange} />
        </nav>
        <section>
          {filteredRobots.map((robot) => (
            <div key={robot.id}>
              <img src={`https://robohash.org/${robot.id}?200x200`} alt="robot" />
              <h2>{robot.name}</h2>
              <h4>{robot.email}</h4>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
