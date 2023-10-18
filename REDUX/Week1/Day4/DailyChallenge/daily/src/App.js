//aApp.js
import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from './actions';
import './style.css'



const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
    robots: state.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <nav>
          <h1>ROBOFRIENS</h1>
          <input type="text" id="input" onChange={onSearchChange} />
        </nav>
        <section>
          {filteredRobots.map((robot) => (
            <div key={robot.id}>
              <img src={`${process.env.PUBLIC_URL}/assets/${robot.id}.png`} alt="robot" />
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
