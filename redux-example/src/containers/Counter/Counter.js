import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterOutput value={this.props.value} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <CounterControl label="Add 10 to Second" clicked={this.props.onAddTen}  />
            </div>
        );
    }
}

// connect() -> 4 Arguments -> 2 Arguments which are important - mapStateToProps & mapDispatchToProps
const mapStateToProps = state => {
    return {
        ctr: state.first.counter,
        value: state.second.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd: () => dispatch({type: 'ADD'}),
        onSubtract: () => dispatch({type: 'SUB'}),
        onAddTen: () => dispatch({type: 'SOMETHING'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// import { useSelector, useDispatch } from 'react-redux';
// import CounterControl from '../../components/CounterControl/CounterControl';
// import CounterOutput from '../../components/CounterOutput/CounterOutput';

// const Counter = (props) => {
//     const counter = useSelector(state => state.counter)
//     const dispatch = useDispatch()

//     return(
//         <div>
//             <CounterOutput value={counter} />
//             <CounterControl label="Increment" clicked={() => dispatch({type: 'INCREMENT'})} />
//             <CounterControl label="Decrement" clicked={() => dispatch({type: 'DECREMENT'})}  />
//             <CounterControl label="Add 5" clicked={() => dispatch({type: 'ADD'})}  />
//             <CounterControl label="Subtract 5" clicked={() => dispatch({type: 'SUB'})}  />
//         </div>
//     )
// }

// export default Counter;