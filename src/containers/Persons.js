import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";
import actionType from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) =>
      dispatch({ type: actionType.ADD_PERSON, personData: { name, age } }),
    onDeletePerson: (id) => dispatch({ type: actionType.DELETE_PERSON, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
