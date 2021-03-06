import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.ppl.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded: (name, age) => dispatch({ type: actionTypes.PERSON_ADDED, personData: {name: name, age: age} }),
        personDeleted: (personId) => dispatch({ type: actionTypes.PERSON_DELETED, value: personId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);