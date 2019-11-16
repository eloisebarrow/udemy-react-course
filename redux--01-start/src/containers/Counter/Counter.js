import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtract}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // stores instructions for how state, managed by redux, should be mapped to props we can use in this container 
    return { // an object containing props for the container to use
    // will eventually be passed to our react-redux package
        ctr: state.ctr.counter, // prop 'ctr' with value of state.ctr.counter (from rootReducer in index.js)
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, value: 15 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is a function which returns a higher order component; then Counter is passed to it
