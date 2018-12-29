// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';

// const Counter = ({ value, onIncrement, onDecrement }) => (
//   <div>
//   <h1>{value}</h1>
//   <button onClick={onIncrement}>+</button>
//   <button onClick={onDecrement}>-</button>
//   </div>
// );

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT': return state + 1;
//     case 'DECREMENT': return state - 1;
//     default: return state;
//   }
// };

// const store = createStore(reducer);

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//       onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('root')
//   );
// };

// render();
// store.subscribe(render);

// serviceWorker.unregister();





import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


