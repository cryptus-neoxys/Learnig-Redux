import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
  const mas = [];
  return (
    <div>
      <CounterOutput value={props.ctr} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
      <CounterControl label="Add 5" clicked={props.AddCounter} />
      <CounterControl label="Subtract 5" clicked={props.SubtractCounter} />
      <hr />
      <button onClick={props.onStoreResult}>Store Results</button>
      <ul>
        {props.storedResults.map((result) => (
          <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>
            {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ctr: state.counter,
  storedResults: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
  AddCounter: () => dispatch({ type: 'ADD', val: 5 }),
  SubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 5 }),
  onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
  onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', delID: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
